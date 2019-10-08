import uuidv4 from 'uuid/v4';

export default function reducer(state, action) {
  const todo = action.payload;
  const alreadyHasTodo = state.todos.find(t => t.text === todo);
  const isAddable = todo && !alreadyHasTodo;

  switch (action.type) {
    case 'GET_TODOS':
      return {
        ...state,
        todos: action.payload
      };
    case 'ADD_TODO':
      // if (!isAddable) return state;

      const todos = [...state.todos, todo];
      return { ...state, todos };
    case 'SET_CURRENT_TODO':
      return { ...state, currentTodo: todo };
    case 'TOGGLE_TODO':
      const toggledTodos = state.todos.map(t => (t.id === todo.id ? todo : t));
      return { ...state, todos: toggledTodos };
    case 'UPDATE_TODO':
      if (!isAddable) return state;

      const updatedTodo = { ...state.currentTodo, text: todo };
      const updatedIndex = state.todos.findIndex(t => t.id === updatedTodo.id);
      const updatedTodos = [
        ...state.todos.slice(0, updatedIndex),
        updatedTodo,
        ...state.todos.slice(updatedIndex + 1)
      ];
      return { ...state, currentTodo: {}, todos: updatedTodos };
    case 'REMOVE_TODO':
      const filteredTodos = state.todos.filter(t => t.id !== todo.id);
      const currentTodo =
        todo.id === state.currentTodo.id ? {} : state.currentTodo;
      return { ...state, currentTodo, todos: filteredTodos };
    default:
      return state;
  }
}
