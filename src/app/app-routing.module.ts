import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncountertypesComponent } from './encountertypes/encountertypes.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: EncountertypesComponent },
  { path: 'edit/:uuid', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
