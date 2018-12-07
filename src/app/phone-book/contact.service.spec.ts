import { TestBed } from '@angular/core/testing';
import { ContactService, BASE_URL } from './contact.service';
import { AppModule } from '../app.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Contact } from './contact';

describe('ContactService', () => {

  let service: ContactService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule, HttpClientTestingModule]
    });
    service = TestBed.get(ContactService);
    httpMock =  TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should fetch all contacts',
    (done: DoneFn) => {
        service.getContacts().subscribe((contacts: Contact[]) => {
        expect(contacts.length).toBe(2);
        // We need to call done function for tests that call asynchronous methods
        done();
      });

      const req = httpMock.expectOne(BASE_URL);
      expect(req.request.method).toBe('GET');
      req.flush([
        {id: 1, firstName: 'John', lastName: 'Doe', phoneNumber: '256-567-6524'},
        {id: 2, firstName: 'Mary', lastName: 'Johns', phoneNumber: '256-557-3424'}
      ]);

      // To be moved to afterEach()
      httpMock.verify();
  });

  it('should multiply the specified numbers', () => {
    expect(service.multiply(8, 12)).toBe(96);
  });

});
