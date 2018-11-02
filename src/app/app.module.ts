import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { EncounterTypesComponent } from './encounter-types/encounter-types.component';
import { EditComponent } from './encounter-types/edit.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog.component';
import { MatTableModule } from '@angular/material';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducer} from './state/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EncounterTypesComponent,
    EditComponent,
    ConfirmDialogComponent,
    HomeComponent
  ],
  entryComponents: [ConfirmDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    StoreModule.forRoot({'app': reducer}),
    StoreDevtoolsModule.instrument({
      name: 'Encounter Types App',
      maxAge: 15,
      logOnly: environment.production
    })
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
