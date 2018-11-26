import { TestBed } from '@angular/core/testing';

import { IntercepteurService } from './intercepteur.service';

describe('IntercepteurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntercepteurService = TestBed.get(IntercepteurService);
    expect(service).toBeTruthy();
  });
});
