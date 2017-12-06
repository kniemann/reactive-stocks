package org.kan;

import org.kan.model.Stock;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

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
                .andRoute(DELETE("/stocks/{symbol}"), handlerFunctions::deleteStock);
    }

    @Component
    public static class HandlerFunctions {
        private final ReactiveStockRepository reactiveStockRepository;

        public HandlerFunctions (ReactiveStockRepository reactiveStockRepository) {
            this.reactiveStockRepository = reactiveStockRepository;
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





    }

}
