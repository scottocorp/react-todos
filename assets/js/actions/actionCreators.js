// add todo
export function addTodo(content) {
  console.log('dispatching addTodo ' + content)
  return {
    type: 'ADD_TODO',
    content
  }
}

// remove todo
export function removeTodo(todoId) {
  console.log('dispatching removeTodo ' + todoId)
  return {
    type: 'REMOVE_TODO',
    todoId
  }
}

// edit todo
export function editTodo(todoId) {
  console.log('dispatching editTodo ' + todoId)
  return {
    type: 'EDIT_TODO',
    todoId
  }
}

// view todo
export function viewTodo(todoId) {
  console.log('dispatching viewTodo ' + todoId)
  return {
    type: 'VIEW_TODO',
    todoId
  }
}

// update todo
export function updateTodo(todoId, content) {
  console.log('dispatching updateTodo ' + content)
  return {
    type: 'UPDATE_TODO',
    todoId,
    content
  }
}

// toggle complete
export function toggleComplete(todoId) {
  console.log('dispatching toggleComplete ' + todoId)
  return {
    type: 'TOGGLE_COMPLETE',
    todoId
  }
}

// toggle all complete
export function toggleAllComplete(completed) {
  console.log('dispatching toggleAllComplete ' + completed)
  return {
    type: 'TOGGLE_ALL_COMPLETE',
    completed
  }
}

// clear completed
export function clearCompleted(completed) {
  console.log('dispatching clearCompleted ')
  return {
    type: 'CLEAR_COMPLETED',
    completed
  }
}

// update filter
export function updateFilter(filter) {
  console.log('dispatching updateFilter ' + filter)
  return {
    type: 'UPDATE_FILTER',
    filter
  }
}
