package org.kan;

import com.mongodb.connection.Server;
import io.micrometer.core.instrument.Counter;
import io.micrometer.core.instrument.FunctionCounter;
import io.micrometer.core.instrument.Gauge;
import io.micrometer.core.instrument.Timer;
import io.micrometer.core.instrument.composite.CompositeMeterRegistry;
import org.kan.model.Stock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.Duration;
import java.util.concurrent.atomic.AtomicInteger;

import static java.util.Collections.emptyList;
import static org.springframework.web.reactive.function.server.RequestPredicates.*;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

@Configuration
public class ReactiveStockRouter {
    @Bean
    RouterFunction<ServerResponse> createRoutes(HandlerFunctions handlerFunctions) {
        return route(GET("/stocks"), handlerFunctions::getAllStocks)
                .andRoute(GET("/stocks/{symbol}"), handlerFunctions::getStock)
                .andRoute(POST("/stocks"), handlerFunctions::createStock)
                .andRoute(PUT("/stocks/{symbol}/quantity"), handlerFunctions::updateStockQuantity)
                .andRoute(DELETE("/stocks/{symbol}"), handlerFunctions::deleteStock)
                .andRoute(GET("/stocks/quote/{symbol}"), handlerFunctions::getQuote)
                .andRoute(GET("/stocks/daily/{symbol}"), handlerFunctions::getStockDaily);
    }

    @Bean CompositeMeterRegistry compositeMeterRegistry() {
        CompositeMeterRegistry compositeMeterRegistry = new CompositeMeterRegistry();
        compositeMeterRegistry.counter("my.counter","type","ping");
        //compositeMeterRegistry.add(...)
        //Do specific config for Prometheus


        AtomicInteger n = new AtomicInteger(0);
        compositeMeterRegistry.gauge("my.guage", emptyList(),
                n, n2 -> n2.get());

        Timer timer = Timer.builder("timer")
                .publishPercentileHistogram()
                .sla(Duration.ofMillis(270))
                .register(compositeMeterRegistry);

       // Counter c =
        FunctionCounter.builder("fcounter", n, n2 -> n2.get());
        //TODO look at @Timed annotation?


        return compositeMeterRegistry;

    }

    @Component
    public static class HandlerFunctions {
        //TODO Implement this! http://micrometer.io/docs/ref/spring/2.0#_webflux_functional_coming_in_spring_boot_2_0
        private final ReactiveStockRepository reactiveStockRepository;
        private final StockService stockService;

        public HandlerFunctions (ReactiveStockRepository reactiveStockRepository, StockService stockService) {
            this.reactiveStockRepository = reactiveStockRepository;
            this.stockService = stockService;
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
    }

}
