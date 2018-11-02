import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog.component';
import { StoreModule } from '@ngrx/store';
import { reducer} from './state/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EncounterTypesModule } from './encounter-types/encounter-types.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [ConfirmDialogComponent],
  imports: [
    SharedModule,
    StoreModule.forRoot({'app': reducer}),
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
