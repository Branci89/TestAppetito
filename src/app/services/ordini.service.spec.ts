import { TestBed } from '@angular/core/testing';

import { OrdiniService } from './ordini.service';

describe('OrdiniService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdiniService = TestBed.get(OrdiniService);
    expect(service).toBeTruthy();
  });
});
