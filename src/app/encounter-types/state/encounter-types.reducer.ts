import { EncounterTypeActions, EncounterTypeActionType } from './encounter-types.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EncounterType } from '../encounter-type';

export interface EncounterTypeState {
  includeRetired: boolean;
  encTypes: EncounterType[]
}

const getEncounterTypesFeatureState = createFeatureSelector<EncounterTypeState>('encounterTypes');

export const getIncludeRetired = createSelector(
  getEncounterTypesFeatureState,
  state => state.includeRetired
);

export const getEncTypes = createSelector(
  getEncounterTypesFeatureState,
  state => state.encTypes
);

const initialState: EncounterTypeState = {
  includeRetired: null,
  encTypes: []
};

export function reducer(state = initialState, action: EncounterTypeActions) {

  switch (action.type) {

    case EncounterTypeActionType.ToggleRetired:
      return {
        ...state,
        includeRetired: action.payload
      };

    case EncounterTypeActionType.Load:
      return {
        ...state,
        encTypes: action.payload
      };

    default:
      return state;
  }

}
