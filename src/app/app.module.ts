import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EncounterTypesModule } from './encounter-types/encounter-types.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from "./home/home.component";


@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  entryComponents: [ConfirmDialogComponent],
  imports: [
    SharedModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'Metadata App',
      maxAge: 15,
      logOnly: environment.production
    }),
    EncounterTypesModule
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
