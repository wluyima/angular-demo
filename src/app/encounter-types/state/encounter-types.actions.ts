import { Action } from '@ngrx/store';
import { EncounterType } from '../encounter-type';

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

  constructor(public payload: EncounterType[]){
  }
}

export type EncounterTypeActions = ToggleRetired | Load;
