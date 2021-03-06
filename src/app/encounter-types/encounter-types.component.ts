import { Component, OnInit } from '@angular/core';
import { EncounterTypeService } from './encounter-type.service';
import { EncounterType } from './encounter-type';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faTimes, faUndo, faPen } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog.component';
import { Store, select } from '@ngrx/store';
import * as encTypeActions from './state/encounter-types.actions';
import * as fromEncTypes from './state/encounter-types.reducer';
import { State } from '../state/app.state';

@Component({
  templateUrl: './encounter-types.component.html',
  styleUrls: ['./encounter-types.component.css']
})
export class EncounterTypesComponent implements OnInit {

  title = 'Encounter Types List';
  encounterTypes: EncounterType[];
  includeRetired = false;
  faEdit = faPen;
  faTrashAlt = faTrashAlt;
  faTimes = faTimes;
  faUndo = faUndo;
  columnsToDisplay = ['name', 'description', 'action'];

  constructor(
    private service: EncounterTypeService,
    private dialog: MatDialog,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.store.pipe(select(fromEncTypes.getIncludeRetired)).subscribe(
        includeRetired => {
          if (includeRetired !== undefined) {
            this.includeRetired = includeRetired;
            this.loadEncounterTypes();
          }
        }
    );

    this.store.pipe(select(fromEncTypes.getEncTypes)).subscribe(
      encounterTypes => this.encounterTypes = encounterTypes);

    this.loadEncounterTypes();
  }

  confirmDialog(encounterType: EncounterType) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '450px';
    dialogConfig.height = '200px';
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      name: encounterType.name
    };


    const dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      result => {
        if (result === 'true') {
          this.delete(encounterType);
        }
      }
    );
  }

  loadEncounterTypes() {
    this.store.dispatch(new encTypeActions.Load());
  }

  search(phrase: string) {
     this.service.search(phrase)
      .subscribe(encTypes => this.encounterTypes = encTypes);
  }

  retire(encounterType: EncounterType) {
     encounterType.retired = true;
     this.service.save(encounterType).subscribe(
       () => this.loadEncounterTypes()
     );
  }

  restore(encounterType: EncounterType) {
    encounterType.retired = false;
    this.service.save(encounterType).subscribe(
      () => this.loadEncounterTypes()
    );
  }

  delete(encounterType: EncounterType) {
    this.service.delete(encounterType).subscribe(
      () => this.loadEncounterTypes()
    );
  }

  toggleIncludeRetired(value: boolean) {
    this.store.dispatch(new encTypeActions.ToggleRetired(value));
  }

}
