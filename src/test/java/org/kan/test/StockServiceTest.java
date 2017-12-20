package org.kan.test;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.platform.runner.JUnitPlatform;
import org.junit.runner.RunWith;
import org.kan.AppConfig;
import org.kan.IEXTradingService;
import org.kan.StockService;
import org.kan.model.Quote;
import org.kan.model.StockDaily;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import reactor.core.publisher.Flux;
import reactor.test.StepVerifier;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

@RunWith(JUnitPlatform.class)
@SpringJUnitConfig
@ContextConfiguration(classes = {TestConfig.class})
public class StockServiceTest {
    DateFormat df;
    Date date;


    @Autowired
    StockService stockService;
    StockDaily EXPD;
    public StockServiceTest() throws ParseException {
        df = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss");
        df.setTimeZone(TimeZone.getTimeZone("PST"));
        date = df.parse("12/04/2016 16:00:00");

//        EXPD = StockDaily.builder()
//                .symbol("EXPD")
//                .date(df.parse("12/04/2016 16:00:00"))
//                .open(53.53)
//                .high(54.07)
//                .low(53.48)
//                .close(54.06)
//                .unadjustedVolume(2270218)
//                .change(0.83)
//                .vwap(53.8914)
//                .label("Dec 5, 16")
//                .changeOverTime(0.0)
//                .build();

    }

    @BeforeEach
    public void setup() {
    }

    @Test
    public void test1Yr() {
        StepVerifier.create(stockService.get1Yr("EXPD").log()).thenConsumeWhile(
                v ->  ( (StockDaily) v).getSymbol().equals("EXPD")
                        && ((StockDaily) v).getDate().after(date)  )
                .verifyComplete();
    }

    @Test
    public void testQuote() {
        StepVerifier.create(stockService.getQuote("EXPD").log()).thenConsumeWhile(
                v ->  ( (Quote) v).getSymbol().equals("EXPD")
                        && ((Quote) v).getIexLastUpdated().after(date)  )
                .verifyComplete();
    }

}
