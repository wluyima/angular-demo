import { Component, OnInit } from '@angular/core';
import { EncounterTypeService } from '../encountertype.service';
import { EncounterType } from '../model/encountertype';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-encountertypes',
  templateUrl: './encountertypes.component.html',
  styleUrls: ['./encountertypes.component.css']
})
export class EncountertypesComponent implements OnInit {

  encounterTypes: EncounterType[];
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  constructor(
    private service: EncounterTypeService
  ) { }

  ngOnInit() {
    this.loadEncounterTypes();
  }

  loadEncounterTypes(){
    this.service.getEncounterTypes()
      .subscribe(encTypes => this.encounterTypes = encTypes);
  }

  retire(encounterType: EncounterType){
     encounterType['retired'] = true;
     this.service.save(encounterType).subscribe(
       response => this.loadEncounterTypes()
     );
  }

}
