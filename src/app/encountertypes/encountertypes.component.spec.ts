import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncountertypesComponent } from './encountertypes.component';

describe('EncountertypesComponent', () => {
  let component: EncountertypesComponent;
  let fixture: ComponentFixture<EncountertypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
