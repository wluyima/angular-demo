import { NgModule } from '@angular/core';
import { PhoneBookComponent } from './phone-book.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { EditContactComponent } from './edit-contact.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'phonebook/edit/:id', component: EditContactComponent }
];

@NgModule({
  declarations: [
    PhoneBookComponent,
    EditContactComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PhoneBookModule {}
