import { NgModule } from '@angular/core';
import { EncounterTypesComponent } from './encounter-types.component';
import { EditComponent } from './edit.component';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    EncounterTypesComponent,
    EditComponent,
    ConfirmDialogComponent,
  ]
})
export class EncounterTypesModule { }
