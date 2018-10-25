import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from "@angular/router";
import { EncounterType } from '../model/encountertype';
import {EncounterTypeService} from "../encountertype.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  encounterType: EncounterType

  constructor(
    private location: Location,
    private router: Router,
    private service: EncounterTypeService
  ) { }

  ngOnInit() {
    this.encounterType = new EncounterType(); 
  }

  save(): void {
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
