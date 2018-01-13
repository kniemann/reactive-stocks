package org.kan;

import com.mongodb.reactivestreams.client.MongoClient;
import com.mongodb.reactivestreams.client.MongoClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractReactiveMongoConfiguration;

@Configuration
public class AppConfig extends AbstractReactiveMongoConfiguration {
    @Bean
    StockService IEXTradingService() {
        return new IEXTradingService();
    }
    public @Bean
    MongoClient reactiveMongoClient()  {
        return MongoClients.create("mongodb://localhost");
    }

    @Override
    protected String getDatabaseName() {
        return "reactive-stocks";
    }
}
