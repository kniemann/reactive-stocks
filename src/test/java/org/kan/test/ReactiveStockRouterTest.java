package org.kan.test;

import org.junit.runner.RunWith;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.platform.runner.JUnitPlatform;
import org.kan.model.Stock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.web.reactive.server.WebTestClient;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

@RunWith(JUnitPlatform.class)
@SpringJUnitConfig
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ReactiveStockRouterTest {

    private WebTestClient webTestClient;

    @Autowired
    private RouterFunction<ServerResponse> routerFunction;

    @BeforeEach
    public void setup() {
        webTestClient = WebTestClient.bindToRouterFunction(routerFunction)
                .configureClient()
                .baseUrl("http://localhost:8080")
                .build();
    }

    @Test
    public void testCreateStock() {
        Stock stock = new Stock("EXPD",100,50);
        webTestClient.post()
                .uri("/stocks")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .accept(MediaType.APPLICATION_JSON_UTF8)
                .body(Mono.just(stock), Stock.class)
                .exchange()
                .expectStatus()
                .isOk()
                .expectHeader()
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .expectBody()
                .jsonPath("$.purchasePrice")
                .isEqualTo(100);
    }

}
