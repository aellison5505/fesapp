import { TestBed } from '@angular/core/testing';

import { DyndbService } from './dyndb.service';

describe('DyndbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DyndbService = TestBed.get(DyndbService);
    expect(service).toBeTruthy();
  });
});
