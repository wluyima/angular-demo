import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent],
  exports: [
    FormsModule,
    HeaderComponent
  ]
})
export class SharedModule { }
