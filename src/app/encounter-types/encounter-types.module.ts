import { NgModule } from '@angular/core';
import { EncounterTypesComponent } from './encounter-types.component';
import { EditComponent } from './edit.component';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/encounter-types.reducer';

const routes: Routes = [
  { path: 'edit/:uuid', component: EditComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('encounterTypes', reducer)
  ],
  declarations: [
    EncounterTypesComponent,
    EditComponent,
    ConfirmDialogComponent,
  ]
})
export class EncounterTypesModule { }
