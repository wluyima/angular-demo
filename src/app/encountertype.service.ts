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

  getEncounterTypes(): Observable<EncounterType[]> {
    let httpOptions = {
      headers: authHeader,
      params: {'v': 'default'}
    }
    return this.http.get<EncounterType[]>(BASE_URL, httpOptions)
      .pipe(
        map(response => response['results'])
      );
  }

  save(encounterType: EncounterType): Observable<EncounterType> {
    let httpOptions = {
      headers: authHeader
    }
    
    return this.http.post<EncounterType>(BASE_URL, encounterType, httpOptions)
  }

}
