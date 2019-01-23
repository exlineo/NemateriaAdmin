import { TestBed } from '@angular/core/testing';

import { CONST } from './const';

describe('ConstService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CONST = TestBed.get(CONST);
    expect(service).toBeTruthy();
  });
});
