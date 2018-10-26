import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EncounterTypesComponent } from './encountertypes.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterTestingModule } from "@angular/router/testing";
import { MatDialogModule } from "@angular/material";

describe('EncounterTypesComponent', () => {
  let component: EncounterTypesComponent;
  let fixture: ComponentFixture<EncounterTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        FontAwesomeModule,
        RouterTestingModule,
        HttpClientModule,
        MatDialogModule
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
