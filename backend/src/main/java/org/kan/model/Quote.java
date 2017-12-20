package org.kan.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;

@Data
public class Quote {
    private String symbol;
    private String companyName;
    private String primaryExchange;
    private String sector;
    private String calculationPrice;
    private double open;
    private long openTime;
    private double close;
    private long closeTime;
    private double latestPrice;
    private String latestSource;
    private String latestTime;
    private long latestUpdate;
    private long latestVolume;
    private double iexRealtimePrice;
    private long iexRealtimeSize;
    @JsonFormat(shape=JsonFormat.Shape.NUMBER, pattern="s")
    private Date iexLastUpdated;
    private double delayedPrice;
    private long delayedPriceTime;
    private double previousClose;
    private double change;
    private double changePercent;
    private double iexMarketPercent;
    private long iexVolume;
    private long avgTotalVolume;
    private double iexBidPrice;
    private double iexBidSize;
    private double iexAskPrice;
    private double iexAskSize;
    private long marketCap;
    private double peRatio;
    private double week52High;
    private double week52Low;
    private double ytdChange;
}
