import { TestBed, inject } from '@angular/core/testing';

import { QuoteWsServiceService } from './quote-ws-service.service';

describe('QuoteWsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuoteWsServiceService]
    });
  });

  it('should be created', inject([QuoteWsServiceService], (service: QuoteWsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
