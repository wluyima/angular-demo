import { Component, OnInit } from '@angular/core';
import { EncounterTypeService } from '../services/encountertypes/encountertype.service';
import { EncounterType } from '../model/encountertype';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faTimes, faUndo, faPen } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ConfirmDialogComponent } from "../dialogs/confirm-dialog.component";

@Component({
  selector: 'app-encountertypes',
  templateUrl: './encountertypes.component.html',
  styleUrls: ['./encountertypes.component.css']
})
export class EncounterTypesComponent implements OnInit {

  title = 'Encounter Types';
  encounterTypes: EncounterType[];
  includeRetired = false;
  faEdit = faPen;
  faTrashAlt = faTrashAlt;
  faTimes = faTimes;
  faUndo = faUndo;
  columnsToDisplay = ['name', 'description', 'action'];

  constructor(
    private service: EncounterTypeService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
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


    let dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      result => {
        if(result === 'true'){
          this.delete(encounterType);
        }
      }
    );
  }

  loadEncounterTypes(){
    this.service.getEncounterTypes(this.includeRetired)
      .subscribe(encTypes => this.encounterTypes = encTypes);
  }

  search(phrase: string){
     this.service.search(phrase)
      .subscribe(encTypes => this.encounterTypes = encTypes);
  }

  retire(encounterType: EncounterType){
     encounterType.retired = true;
     this.service.save(encounterType).subscribe(
       response => this.loadEncounterTypes()
     );
  }

  restore(encounterType: EncounterType){
    encounterType.retired = false;
    this.service.save(encounterType).subscribe(
      response => this.loadEncounterTypes()
    );
  }

  delete(encounterType: EncounterType){
    this.service.delete(encounterType).subscribe(
      _ => this.loadEncounterTypes()
    );
  }

}
