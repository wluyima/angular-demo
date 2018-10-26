import { Component, OnInit } from '@angular/core';
import { EncounterTypeService } from '../services/encountertypes/encountertype.service';
import { EncounterType } from '../model/encountertype';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faTimes, faUndo, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-encountertypes',
  templateUrl: './encountertypes.component.html',
  styleUrls: ['./encountertypes.component.css']
})
export class EncountertypesComponent implements OnInit {

  title = 'Encounter Types';
  encounterTypes: EncounterType[];
  includeRetired = false;
  faEdit = faPen;
  faTrashAlt = faTrashAlt;
  faTimes = faTimes;
  faUndo = faUndo;

  constructor(
    private service: EncounterTypeService
  ) { }

  ngOnInit() {
    this.loadEncounterTypes();
  }

  loadEncounterTypes(){
    this.service.getEncounterTypes(this.includeRetired)
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
