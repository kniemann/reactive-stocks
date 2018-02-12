package org.kan.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import reactor.core.publisher.Mono;

@Data
@Document
@Builder
public class Stock {
    @Id
    private String symbol;
    private int purchasePrice;
    private int quantity;

    @Override
    public String toString() {
        return "Stock [symbol=" + symbol + ", purchase price=" + purchasePrice + ", quantity=" + quantity + "]";
    }

}
