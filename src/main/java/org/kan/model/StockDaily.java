package org.kan.model;

import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Builder
@Data
public class StockDaily {
    private String symbol;
    private Date date;
    private double open;
    private double high;
    private double low;
    private double close;
    private int unadjustedVolume;
    private double change;
    private double vwap;
    private String label;
    private double changeOverTime;
}
