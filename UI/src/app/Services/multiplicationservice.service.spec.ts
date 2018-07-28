import { TestBed, inject } from '@angular/core/testing';

import { MultiplicationserviceService } from './multiplicationservice.service';

describe('MultiplicationserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MultiplicationserviceService]
    });
  });

  it('should be created', inject([MultiplicationserviceService], (service: MultiplicationserviceService) => {
    expect(service).toBeTruthy();
  }));
});
