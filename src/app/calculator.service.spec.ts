import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should randomize is value 2', () => {
    const expectedMaxValue = 3;
    const expectedMinValue = 0;

    const result = service.randomCalculateIndex();

    expect(result).toBeLessThanOrEqual(expectedMaxValue);
    expect(result).toBeGreaterThanOrEqual(expectedMinValue);
  })
});
