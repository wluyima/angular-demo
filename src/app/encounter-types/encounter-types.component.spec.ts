import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EncounterTypesComponent } from './encounter-types.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule, MatTableModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import {reducer} from "../state/app.reducer";

describe('EncounterTypesComponent', () => {
  let component: EncounterTypesComponent;
  let fixture: ComponentFixture<EncounterTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        FontAwesomeModule,
        RouterTestingModule,
        HttpClientModule,
        MatDialogModule,
        MatTableModule,
        StoreModule.forRoot({})
      ],
      declarations: [ EncounterTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
