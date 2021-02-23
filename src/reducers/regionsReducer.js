const initialState = {
  region: 'YKT'
}

export default (state = initialState, action) => {

  switch (action.type) {
    case "CHANGE_REGION":
      return {
        ...state,
        region: action.payload
      }
    default:
      return state;
  }
}