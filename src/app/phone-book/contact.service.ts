import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8081/api/person';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(BASE_URL);
  }

  saveContact(contact: Contact): Observable<Contact> {
    let url = BASE_URL;
    if(contact.id){
      url+='/'+contact.id;
    }
    return this.httpClient.post<Contact>(url, contact);
  }

  getContactById(id: number): Observable<Contact> {
    return this.httpClient.get<Contact>(BASE_URL+'/'+id);
  }

  deleteContact(id: number): Observable<any> {
    return this.httpClient.delete<any>(BASE_URL+'/'+id);
  }

}
