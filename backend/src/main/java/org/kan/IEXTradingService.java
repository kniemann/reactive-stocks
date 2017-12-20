package org.kan;

import org.kan.model.Quote;
import org.kan.model.StockDaily;
import org.kan.model.StockToday;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public class IEXTradingService implements StockService {

    private WebClient client;


    public IEXTradingService() {
        client = WebClient.create("https://api.iextrading.com");
    }

    public Flux<StockDaily> get1Yr(final String symbol) {
         return client.get()
                 .uri(String.format("/1.0/stock/%s/chart/1y", symbol))
                 .accept(MediaType.APPLICATION_JSON)
                 .retrieve()
                 .bodyToMono(StockDaily[].class)
                 .flatMapMany(Flux::fromArray)
                 .map(stock -> {
                     stock.setSymbol(symbol);
                     return stock;
                 });
     }
     //TODO Not yet implemented
     public Mono<StockToday> getToday(String symbol) {
        return client.get()
                .uri(String.format("/1.0/stock/%s/chart/1d", symbol))
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(StockToday.class);
     }
    public Mono<Quote> getQuote(String symbol) {
        return client.get()
                .uri(String.format("/1.0/stock/%s/quote", symbol))
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(Quote.class);
    }

}
