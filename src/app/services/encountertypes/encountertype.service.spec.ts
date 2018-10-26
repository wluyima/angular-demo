import { TestBed } from '@angular/core/testing';

import { EncountertypeService } from './encountertype.service';

describe('EncountertypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EncountertypeService = TestBed.get(EncountertypeService);
    expect(service).toBeTruthy();
  });
});
