import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule} from '../app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule, MatTableModule } from '@angular/material';
import { HomeComponent } from "../home/home.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, HomeComponent],
  exports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    FontAwesomeModule,
    HeaderComponent,
    HomeComponent
  ]
})
export class SharedModule { }
