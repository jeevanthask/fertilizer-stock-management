import { TestBed } from '@angular/core/testing';

import { FertiStockService } from './ferti-stock.service';

describe('FertiStockService', () => {
  let service: FertiStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FertiStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
