package org.kan;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    @Bean
    StockService IEXTradingService() {
        return new IEXTradingService();
    }
}
