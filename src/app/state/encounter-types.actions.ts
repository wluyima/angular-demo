import { Action } from '@ngrx/store';

export enum EncounterTypeActionType {
  ToggleRetired = 'TOGGLE_INCLUDE_RETIRED',
  Load = 'LOAD'
}

export class ToggleRetired implements Action {
  readonly type = EncounterTypeActionType.ToggleRetired;

  constructor(public payload: boolean){
  }
  
}

export class Load implements Action {
  readonly type = EncounterTypeActionType.Load;
}

export type EncounterTypeActions = ToggleRetired | Load;
