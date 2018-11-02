import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EncounterType } from './encounter-type';
import { EncounterTypeService } from './encounter-type.service';

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  encounterType: EncounterType;

  titles = {
    add: 'New Encounter Type Form',
    edit: 'Edit Encounter Type Form'
  };

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private service: EncounterTypeService
  ) { }

  ngOnInit() {
    let uuid = this.route.snapshot.paramMap.get('uuid');
    if(uuid == 'new'){
      this.encounterType = new EncounterType();
    } else{
      this.getEncounterType(uuid);
    }
  }

  getEncounterType(uuid: string) {
    this.service.getEncounterType(uuid).subscribe(
      resp => this.encounterType = resp
    );
  }

  save() {
    this.service.save(this.encounterType).subscribe(
      res => this.router.navigateByUrl('list'),
      error => {
        //TODO use a dialog
        alert('An error occurred: '+error.statusText)
      }
    );
  }

  cancel(): void {
    this.location.back();
  }

}
