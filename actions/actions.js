export const ADD_TODO = 'ADD_TODO';

add nextToDoId = 0;

export function addTodo(text) {
  // body...
  return{
      type : ADD_TODO,
      id : nextToDoId++,
      text
  };
}