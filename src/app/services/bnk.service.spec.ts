import { TestBed } from '@angular/core/testing';

import { BnkService } from './bnk.service';

describe('BnkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BnkService = TestBed.get(BnkService);
    expect(service).toBeTruthy();
  });
});
