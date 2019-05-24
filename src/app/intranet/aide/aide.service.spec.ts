import { TestBed } from '@angular/core/testing';

import { AideService } from './aide.service';

describe('AideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AideService = TestBed.get(AideService);
    expect(service).toBeTruthy();
  });
});
