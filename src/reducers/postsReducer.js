const initialState = {
  news: []
}

export default (state = initialState, action) => {

  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        news: action.payload
      }
    default:
      return state;
  }
}