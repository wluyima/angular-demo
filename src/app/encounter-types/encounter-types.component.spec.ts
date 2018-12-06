import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EncounterTypesComponent } from './encounter-types.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { AppModule } from '../app.module';

describe('EncounterTypesComponent', () => {
  let component: EncounterTypesComponent;
  let fixture: ComponentFixture<EncounterTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        SharedModule,
        RouterTestingModule,
        StoreModule.forRoot({})
      ]
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
