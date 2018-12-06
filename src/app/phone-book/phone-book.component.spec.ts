import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBookComponent } from './phone-book.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../shared/shared.module';
import { AppModule } from '../app.module';

describe('PhoneBookListComponent', () => {
  let component: PhoneBookComponent;
  let fixture: ComponentFixture<PhoneBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, AppModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
