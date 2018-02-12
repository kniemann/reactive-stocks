package org.kan.test;

import com.palantir.docker.compose.DockerComposeRule;
import com.palantir.docker.compose.connection.waiting.HealthChecks;
import org.junit.ClassRule;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.TestInstance;
import org.junit.runner.RunWith;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.platform.runner.JUnitPlatform;
import org.kan.ReactiveStockRepository;
import org.kan.model.Stock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.web.reactive.server.WebTestClient;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

@ActiveProfiles("test")
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@SpringJUnitConfig
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ReactiveStockRouterTest {

    private WebTestClient webTestClient;

    @Autowired
    private RouterFunction<ServerResponse> routerFunction;

    @Autowired
    private ReactiveStockRepository reactiveStockRepository;

    @BeforeAll
    private void resetDatabase() {
        reactiveStockRepository.deleteAll();
        Stock tsla = Stock.builder()
                .symbol("TSLA")
                .purchasePrice(50)
                .quantity(100)
                .build();
        reactiveStockRepository.save(tsla);
    }

    @BeforeEach
    public void setup() {
        webTestClient = WebTestClient.bindToRouterFunction(routerFunction)
                .configureClient()
                .baseUrl("/stocks")
                .build();
    }

    @Test
    public void testCreateStock() {
        Stock stock = Stock.builder()
                .symbol("EXPD")
                .purchasePrice(100)
                .quantity(50)
                .build();

        webTestClient.post()
                .uri("")
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

    @Test
    public void testQuote() {
        webTestClient.get()
                .uri("/quote/EXPD")
                .accept(MediaType.APPLICATION_JSON_UTF8)
                .exchange()
                .expectStatus()
                .isOk()
                .expectHeader()
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .expectBody()
                .jsonPath("$.symbol")
                .isEqualTo("EXPD");
    }
    @Test
    public void testAccountHealth() {
        webTestClient.get()
                .uri("/account/health")
                .accept(MediaType.APPLICATION_JSON_UTF8)
                .exchange()
                .expectStatus()
                .isOk()
                .expectHeader()
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .expectBody()
                .jsonPath("$.gain")
                .isEqualTo(-1886)
                .jsonPath("$.value")
                .isEqualTo(3114);

    }


}
