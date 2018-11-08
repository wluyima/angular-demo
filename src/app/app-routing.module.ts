import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncounterTypesComponent } from './encounter-types/encounter-types.component';
import { HomeComponent } from './home/home.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'encounters', component: EncounterTypesComponent },
  { path: 'phonebook', component: PhoneBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
