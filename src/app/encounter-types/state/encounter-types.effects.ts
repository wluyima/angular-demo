import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from "@ngrx/effects";
import { EncounterTypeService } from "../encounter-type.service";
import { map, switchMap, withLatestFrom } from "rxjs/operators";
import * as encTypeActions from './encounter-types.actions';
import * as fromEncTypes from './encounter-types.reducer';
import { EncounterTypeActionType } from './encounter-types.actions';
import {select, Store} from '@ngrx/store';
import { State } from '../../state/app.state';

@Injectable()
export class EncounterTypeEffects {

  constructor(
    private actions$: Actions,
    private service: EncounterTypeService,
    private store$: Store<State>
  ) {}

  @Effect()
  loadEncounterTypes$ = this.actions$.pipe(
    ofType(EncounterTypeActionType.Load),
    withLatestFrom(this.store$.pipe(select(fromEncTypes.getIncludeRetired))),
    switchMap(
      ([action, includeRetired]) =>
        this.service.getEncounterTypes(includeRetired).pipe(
        map(encounterTypes => new encTypeActions.LoadSuccess(encounterTypes))
      )
    )
  );

}
