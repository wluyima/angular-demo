import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {

  title = 'Contacts';
  contacts: Contact[];

  constructor(private service: ContactService) { }

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts(): void {
    this.service.getContacts().subscribe(
      contacts => this.contacts = contacts
    );
  }

  deleteContact(contact: Contact): void {
    this.service.deleteContact(contact.id).subscribe(
      () => this.loadContacts()
    );
  }

}
