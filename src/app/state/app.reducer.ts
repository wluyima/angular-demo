import { EncounterTypeActions, EncounterTypeActionType} from './encounter-types.actions';

export function reducer(state, action: EncounterTypeActions) {

  switch (action.type) {
    case EncounterTypeActionType.ToggleRetired:
      return {
        ...state,
        includeRetired: action.payload
      };

    default:
      return state;
  }

}
