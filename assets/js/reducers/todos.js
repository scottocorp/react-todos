function todos(state = [], action) {

  // console.log('reducing ' + 'action.type=' + action.type + ' action.index=' + action.index + ' action.content=' + action.content + ' action.todoId=' + action.todoId + ' action.completed=' + action.completed);

  switch(action.type){
    case 'ADD_TODO':
      return [...state,{
        id: _.uniqueId(),
        content: action.content,
        editing: false,
        completed: false,
      }];
    case 'REMOVE_TODO':
      return state.filter( item => item.id != action.todoId )
    case 'EDIT_TODO':
      return state.map( item => {
        var copy = Object.assign({}, item);
        if(item.id == action.todoId){
          copy.editing = true;
        }
        return copy;
      } )
    case 'VIEW_TODO':
      return state.map( item => {
        var copy = Object.assign({}, item);
        if(item.id == action.todoId){
          copy.editing = false;
        }
        return copy;
      } )
    case 'UPDATE_TODO':
      return state.map( item => {
        var copy = Object.assign({}, item);
        if(item.id == action.todoId){
          copy.content = action.content;
        }
        return copy;
      } )
    case 'TOGGLE_COMPLETE':
      return state.map( item => {
        var copy = Object.assign({}, item);
        if(item.id == action.todoId){
          copy.completed = !(copy.completed);
        }
        return copy;
      } )
    case 'TOGGLE_ALL_COMPLETE':
      return state.map( item => {
        var copy = Object.assign({}, item);
        copy.completed = action.completed;
        return copy;
      } )
    case 'CLEAR_COMPLETED':
      return state.filter( item => !item.completed )
    default:
      return state;
  }

  return state;
}

export default todos;
