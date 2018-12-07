import { TestBed } from '@angular/core/testing';
import { ContactService } from './contact.service';
import { AppModule } from '../app.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('ContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AppModule,
      RouterTestingModule
    ]
  }));

  it('should be created', () => {
    const service: ContactService = TestBed.get(ContactService);
    expect(service).toBeTruthy();
  });
});
