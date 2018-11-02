import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditComponent } from './edit.component';
import { RouterTestingModule } from  '@angular/router/testing';
import { SharedModule } from  '../shared/shared.module';
import { EncounterTypesModule } from './encounter-types.module';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule, EncounterTypesModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
