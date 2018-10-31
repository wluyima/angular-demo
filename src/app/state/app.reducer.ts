export function reducer(state, action){

  switch(action.type){
    case 'TOGGLE_INCLUDE_RETIRED':
      return {
        ...state,
        includeRetired: action.payload
      };

    default:
      return state;
  }

}
