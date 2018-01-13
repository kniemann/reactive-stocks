package org.kan;

import org.kan.model.Quote;
import org.kan.model.StockDaily;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface StockService {

    Flux<StockDaily> get1YrFlux(String symbol);

    Mono<StockDaily[]> get1Yr(String symbol);

    Mono<Quote> getQuote(String symbol);

}
