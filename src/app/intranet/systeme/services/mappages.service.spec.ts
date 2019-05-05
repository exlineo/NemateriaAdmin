import { TestBed } from '@angular/core/testing';

import { MappagesService } from './mappages.service';

describe('MappagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MappagesService = TestBed.get(MappagesService);
    expect(service).toBeTruthy();
  });
});
