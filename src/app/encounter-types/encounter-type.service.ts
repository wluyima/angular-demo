import { Injectable } from '@angular/core';
import { EncounterType } from './encounter-type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const BASE_URL = 'http://localhost:8080/openmrs/ws/rest/v1/encountertype';

@Injectable({
  providedIn: 'root'
})
export class EncounterTypeService {

  constructor(
    private http: HttpClient
  ) { }

  getEncounterTypes(includeRetired: boolean): Observable<EncounterType[]> {
    let httpOptions = {
      params: {'v': 'default'}
    };
    if(includeRetired){
      httpOptions.params['includeAll'] = includeRetired;
    }
    
    return this.http.get<EncounterType[]>(BASE_URL, httpOptions)
      .pipe(
        map(response => response['results'])
      );
  }

  getEncounterType(uuid: string): Observable<EncounterType> {
    return this.http.get<EncounterType>(BASE_URL+'/'+uuid);
  }

  search(phrase: string): Observable<EncounterType[]> {
    let httpOptions = {
      params: {'v': 'default'}
    };
    if(phrase.trim()){
      httpOptions.params['q'] = phrase;
    }
    
    return this.http.get<EncounterType[]>(BASE_URL, httpOptions)
      .pipe(
        map(response => response['results'])
      );
  }

  save(encounterType: EncounterType): Observable<EncounterType> {
    let url = BASE_URL;
    if(encounterType.uuid){
      url+='/'+encounterType.uuid;
    }
    
    return this.http.post<EncounterType>(url, encounterType);
  }

  delete(encounterType: EncounterType) {
    let url = BASE_URL;
    if(encounterType.uuid){
      url+='/'+encounterType.uuid;
    }

    return this.http.delete<EncounterType>(url, {params: {'purge': 'true'}});
  }

}
