package org.kan;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.reactive.config.EnableWebFlux;
import org.springframework.web.reactive.config.WebFluxConfigurer;

@Configuration
@EnableWebFlux
public class WebConfig implements WebFluxConfigurer {

    @Bean
    CorsWebFilter corsFilter() {
        return new CorsWebFilter(exchange -> {
            CorsConfiguration corsConfiguration = new CorsConfiguration();
            corsConfiguration.addAllowedMethod("*");
            return corsConfiguration.applyPermitDefaultValues();
        });
    }
}
