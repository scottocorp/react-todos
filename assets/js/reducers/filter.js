function filter(state = [], action) {

  console.log(state, action);

  switch(action.type){
    case 'UPDATE_FILTER':
      return action.filter;
    default:
      return state;
  }

  return state;
}

export default filter;
