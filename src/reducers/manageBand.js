export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type){

    case "ADD_BAND":
      console.log(state)
      return {
        ...state,
        bands: [...state.bands, action.band]
      // {
      // state.todos.concat(action.payload)
      }
          


     default:
      return state 
  }
  
};
