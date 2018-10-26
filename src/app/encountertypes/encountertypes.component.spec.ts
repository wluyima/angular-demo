import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncountertypesComponent } from './encountertypes.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterTestingModule} from "@angular/router/testing";
import {RouterModule} from "@angular/router";

describe('EncountertypesComponent', () => {
  let component: EncountertypesComponent;
  let fixture: ComponentFixture<EncountertypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, FontAwesomeModule, RouterTestingModule, HttpClientModule ],
      declarations: [ EncountertypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncountertypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
