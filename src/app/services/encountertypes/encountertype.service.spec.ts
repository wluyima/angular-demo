import { TestBed } from '@angular/core/testing';

import { EncounterTypeService } from './encountertype.service';
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

describe('EncounterTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]}));

  it('should be created', () => {
    const service: EncounterTypeService = TestBed.get(EncounterTypeService);
    expect(service).toBeTruthy();
  });
});
