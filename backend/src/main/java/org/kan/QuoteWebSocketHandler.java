package org.kan;

import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Mono;

public class QuoteWebSocketHandler implements WebSocketHandler {

    private final StockService stockService;

    public QuoteWebSocketHandler(StockService stockService) {
        this.stockService = stockService;
    }

    @Override
    public Mono<Void> handle(WebSocketSession session) {
        // ...
        return session.send(
                        session.receive().log()
        );
    }
}

