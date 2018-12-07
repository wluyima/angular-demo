import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export const BASE_URL = 'http://' + environment.apiPort + ':' + environment.apiHost + '/api/person';

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
    if (contact.id) {
      url += '/' + contact.id;
    }
    return this.httpClient.post<Contact>(url, contact);
  }

  getContactById(id: number): Observable<Contact> {
    return this.httpClient.get<Contact>(BASE_URL + '/' + id);
  }

  deleteContact(id: number): Observable<any> {
    return this.httpClient.delete<any>(BASE_URL + '/' + id);
  }

  multiply(number1: number, number2: number): number {
    return number1 * number2;
  }

}
