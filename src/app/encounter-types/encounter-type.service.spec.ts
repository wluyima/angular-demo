import { TestBed } from '@angular/core/testing';
import { EncounterTypeService } from './encounter-type.service';
import { HttpClientModule } from "@angular/common/http";

describe('EncounterTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]}));

  it('should be created', () => {
    const service: EncounterTypeService = TestBed.get(EncounterTypeService);
    expect(service).toBeTruthy();
  });
});
