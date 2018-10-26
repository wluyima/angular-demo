import { Injectable } from '@angular/core';
import { EncounterType } from './model/encountertype';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const BASE_URL = 'http://localhost:8080/openmrs/ws/rest/v1/encountertype';
const authHeader = new HttpHeaders({ 'Authorization': 'Basic ' + btoa('admin:Admin123') });

@Injectable({
  providedIn: 'root'
})
export class EncounterTypeService {

  constructor(
    private http: HttpClient
  ) { }

  getEncounterTypes(includeRetired: boolean): Observable<EncounterType[]> {
    let httpOptions = {
      headers: authHeader,
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

  getEncounterType(uuid: string): Observable<EncounterType>{
    let httpOptions = {
      headers: authHeader
    };
    
    return this.http.get<EncounterType>(BASE_URL+'/'+uuid, httpOptions);
  }

  save(encounterType: EncounterType): Observable<EncounterType> {
    let url = BASE_URL;
    if(encounterType.uuid){
      url+='/'+encounterType.uuid;
    }
    let httpOptions = {
      headers: authHeader
    };
    
    return this.http.post<EncounterType>(url, encounterType, httpOptions);
  }

  delete(encounterType: EncounterType) {
    let url = BASE_URL;
    if(encounterType.uuid){
      url+='/'+encounterType.uuid;
    }
    let httpOptions = {
      headers: authHeader, 
      params: {'purge': 'true'}
    };

    return this.http.delete<EncounterType>(url, httpOptions);
  }

}
