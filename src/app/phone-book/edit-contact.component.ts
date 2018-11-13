import { Contact } from './contact';
import { ContactService } from './contact.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './edit-contact.component.html',
})
export class EditContactComponent implements OnInit {

  title: string;
  contact: Contact;

  names = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl()
  });

  phoneNumber = new FormControl();

  constructor(
    private service: ContactService,
    private router: Router,
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id === 'new'){
      this.contact = new Contact();
      this.title =  'Add New Contact';
    } else {
      this.title = 'Edit Contact';
      this.service.getContactById(+id).subscribe(
        response => {
          this.contact = response;
          this.names.setValue({
            firstName: response.firstName,
            lastName: response.lastName
          });
          this.phoneNumber.setValue(response.phoneNumber);
        }
      );
    }
  }

  saveContact(): void {
    let c = new Contact();
    c.id = this.contact.id;
    c.firstName = this.names.value.firstName;
    c.lastName = this.names.value.lastName;
    c.phoneNumber = this.phoneNumber.value;
    this.service.saveContact(c).subscribe(
      () => this.router.navigateByUrl('phonebook')
    );
  }

  cancel(): void {
    this.router.navigateByUrl('phonebook');
  }

  
}
