package org.kan;

import org.kan.model.Stock;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface ReactiveStockRepository extends ReactiveMongoRepository<Stock, String> {
}
