package org.kan;

import com.mongodb.connection.Server;
import io.micrometer.core.annotation.Timed;
import io.micrometer.core.instrument.*;
import io.micrometer.core.instrument.composite.CompositeMeterRegistry;
import io.micrometer.prometheus.PrometheusMeterRegistry;
import org.kan.model.AccountHealth;
import org.kan.model.Quote;
import org.kan.model.Stock;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.ClientRequest;
import org.springframework.web.reactive.function.client.ExchangeFilterFunction;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.util.function.Tuple2;
import reactor.util.function.Tuples;

import java.time.Duration;
import java.util.Arrays;
import java.util.Collections;
import java.util.Map;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

import static java.util.Collections.emptyList;
import static org.springframework.web.reactive.function.server.RequestPredicates.*;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

@Configuration
public class ReactiveStockRouter {
    static Logger log = LoggerFactory.getLogger(ReactiveStockRouter.class);
    @Bean
    RouterFunction<ServerResponse> createRoutes(HandlerFunctions handlerFunctions) {
        return route(GET("/stocks"), handlerFunctions::getAllStocks)
                .andRoute(GET("/stocks/{symbol}"), handlerFunctions::getStock)
                .andRoute(POST("/stocks"), handlerFunctions::createStock)
                .andRoute(PUT("/stocks/{symbol}/quantity"), handlerFunctions::updateStockQuantity)
                .andRoute(DELETE("/stocks/{symbol}"), handlerFunctions::deleteStock)
                .andRoute(GET("/stocks/quote/{symbol}"), handlerFunctions::getQuote)
                .andRoute(GET("/stocks/daily/{symbol}"), handlerFunctions::getStockDaily)
                .andRoute(GET("/stocks/account/health"),handlerFunctions::getAccountHealth);
    }


//    @Bean
//    CompositeMeterRegistry compositeMeterRegistry() {
//        CompositeMeterRegistry compositeMeterRegistry = new CompositeMeterRegistry();
//        compositeMeterRegistry.counter("my.counter","type","ping");
//        //compositeMeterRegistry.add(...)
//        //Do specific config for Prometheus
//
//
//        AtomicInteger n = new AtomicInteger(0);
//        compositeMeterRegistry.gauge("my.guage", emptyList(),
//                n, n2 -> n2.get());
//
//        Timer timer = Timer.builder("timer")
//                .publishPercentileHistogram()
//                .sla(Duration.ofMillis(270))
//                .register(compositeMeterRegistry);
//
//       // Counter c =
//        FunctionCounter.builder("fcounter", n, n2 -> n2.get());
//        //TODO look at @Timed annotation?
//
//
//        return compositeMeterRegistry;
//
//    }

    @Component
    public static class HandlerFunctions {
        private final ReactiveStockRepository reactiveStockRepository;
        private final StockService stockService;
        private final PrometheusMeterRegistry prometheusMeterRegistry;

        public HandlerFunctions (ReactiveStockRepository reactiveStockRepository, StockService stockService, PrometheusMeterRegistry prometheusMeterRegistry) {
            this.reactiveStockRepository = reactiveStockRepository;
            this.stockService = stockService;
            this.prometheusMeterRegistry = prometheusMeterRegistry;
        }


        public Mono<ServerResponse> getAllStocks(ServerRequest request) {
            return ServerResponse.ok()
                    .contentType(MediaType.APPLICATION_JSON_UTF8)
                    .body(reactiveStockRepository.findAll(), Stock.class);
        }

        public Mono<ServerResponse> getStock(ServerRequest serverRequest) {
            return reactiveStockRepository.findById(serverRequest.pathVariable("symbol"))
                    .flatMap(stock -> ServerResponse.ok()
                            .contentType(MediaType.APPLICATION_JSON_UTF8)
                            .body(BodyInserters.fromObject(stock)))
                    .switchIfEmpty(ServerResponse.notFound()
                            .build());

        }
        public Mono<ServerResponse> createStock(ServerRequest serverRequest) {
            return serverRequest.bodyToMono(Stock.class)
                    .flatMap(newStock -> ServerResponse.ok()
                            .contentType(MediaType.APPLICATION_JSON_UTF8)
                            .body(reactiveStockRepository.save(newStock),
                                    Stock.class));
        }

        public Mono<ServerResponse> updateStockQuantity(ServerRequest serverRequest) {
            return reactiveStockRepository.findById(serverRequest.pathVariable("symbol"))
                    .flatMap(existingStock -> serverRequest.bodyToMono(Stock.class)
                            .flatMap(newStock -> {
                                existingStock.setQuantity(newStock.getQuantity());
                                return ServerResponse.ok()
                                        .contentType(
                                                MediaType.APPLICATION_JSON_UTF8)
                                        .body(reactiveStockRepository.save(
                                                existingStock), Stock.class);
                            }))
                    .switchIfEmpty(ServerResponse.notFound()
                            .build());

        }

        public Mono<ServerResponse> deleteStock(ServerRequest serverRequest) {
            return reactiveStockRepository.deleteById(serverRequest.pathVariable("symbol"))
                    .then(ServerResponse.ok()
                            .body(BodyInserters.empty()));
        }

        public Mono<ServerResponse> getQuote(ServerRequest serverRequest) {
            prometheusMeterRegistry.counter("get.quote.explicit").increment();
            return stockService.getQuote(serverRequest.pathVariable("symbol"))
                    .flatMap(quote -> ServerResponse.ok()
                            .contentType(MediaType.APPLICATION_JSON_UTF8)
                            .body(BodyInserters.fromObject(quote)))
                    .switchIfEmpty(ServerResponse.notFound()
                            .build());
        }

        public Mono<ServerResponse> getStockDaily(ServerRequest serverRequest) {
            return stockService.get1Yr(serverRequest.pathVariable("symbol"))
                    .flatMap(daily -> ServerResponse.ok()
                            .contentType(MediaType.APPLICATION_JSON_UTF8)
                            .body(BodyInserters.fromObject(daily)))
                    .switchIfEmpty(ServerResponse.notFound()
                            .build());
        }

        public Mono<ServerResponse> getAccountHealth(ServerRequest serverRequest) {
            return reactiveStockRepository.findAll().flatMap( stock -> {
                Mono<Quote> quoteMono = stockService.getQuote(stock.getSymbol());
                return quoteMono.zipWith(Mono.just(stock));
            })
            //Log output for debugging
            .log()
            .reduce( new AccountHealth(), (accountHealthSoFar, tuple) -> {
                    double value = tuple.getT2().getQuantity() * tuple.getT1().getLatestPrice();
                    double gain = tuple.getT2().getQuantity() * (tuple.getT1().getLatestPrice() - tuple.getT2().getPurchasePrice());
                    accountHealthSoFar.add(gain, value);
                    log.info("Symbol={}, Quote={}, gain={}, value={}", tuple.getT2().getSymbol(), tuple.getT1().getSymbol(), gain, value );
                    return accountHealthSoFar;})
            .flatMap(
                accountHealth -> ServerResponse.ok().contentType(MediaType.APPLICATION_JSON_UTF8)
                .body(BodyInserters.fromObject(accountHealth))
                .switchIfEmpty(ServerResponse.notFound().build()));
        }


    }


}
