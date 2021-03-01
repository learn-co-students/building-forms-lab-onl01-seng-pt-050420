export default function manageBand(state = [] , action) {
  switch(action.type){
        case "ADD_BAND":     
        console.log(state.bands)
      return {     
        bands: state.concat(action.band),
      }
  default:
  return state;
  }
};
