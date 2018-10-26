import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { EncounterTypesComponent } from './encountertypes/encountertypes.component';
import { EditComponent } from './encountertypes/edit/edit.component';
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule, MatButtonModule } from "@angular/material";
import { ConfirmDialogComponent } from "./dialogs/confirm-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    EncounterTypesComponent,
    EditComponent,
    ConfirmDialogComponent
  ],
  entryComponents: [ConfirmDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
    [
      { 
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      }
    ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
