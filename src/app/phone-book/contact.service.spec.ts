import { TestBed } from '@angular/core/testing';

import { ContactService } from './phone-book.service';

describe('PhoneBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactService = TestBed.get(ContactService);
    expect(service).toBeTruthy();
  });
});
