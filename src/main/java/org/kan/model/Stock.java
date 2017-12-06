package org.kan.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Stock {
    @Id
    private String symbol;
    private int purchasePrice;
    private int quantity;

    public Stock() { super();}

    public Stock(String symbol, int purchasePrice, int quantity) {
        this.symbol = symbol;
        this.purchasePrice = purchasePrice;
        this.quantity = quantity;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public String getSymbol() {
        return symbol;
    }
    public int getPurchasePrice() {
        return purchasePrice;
    }

    public void setPurchasePrice(int purchasePrice) {
        this.purchasePrice = purchasePrice;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    @Override
    public String toString() {
        return "Stock [symbol=" + symbol + ", purchase price=" + purchasePrice + ", quantity=" + quantity + "]";
    }

}
