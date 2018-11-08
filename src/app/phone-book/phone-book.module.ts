import { NgModule } from '@angular/core';
import { PhoneBookComponent } from './phone-book.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'edit/person', component: PhoneBookComponent }
  ];

@NgModule({
  declarations: [
    PhoneBookComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PhoneBookModule {}
