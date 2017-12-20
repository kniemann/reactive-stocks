package org.kan.test;

import org.kan.IEXTradingService;
import org.kan.StockService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TestConfig {
    @Bean
    public StockService stockService() {
        return new IEXTradingService();
    }
}
