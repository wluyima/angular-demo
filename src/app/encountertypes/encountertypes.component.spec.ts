import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EncounterTypesComponent } from './encountertypes.component';
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterTestingModule } from "@angular/router/testing";
import { MatDialogModule, MatTableModule } from "@angular/material";
import { SharedModule } from "../shared/shared.module";

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
        MatTableModule
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
