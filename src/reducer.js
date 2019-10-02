import uuidv4 from 'uuid/v4';

export default function reducer(state, action) {
  const todo = action.payload;
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        id: uuidv4(),
        text: action.payload,
        complete: false
      };
      const todos = [...state.todos, newTodo];
      return { ...state, todos };
    case 'SET_CURRENT_TODO':
      return { ...state, currentTodo: todo };
    case 'TOGGLE_TODO':
      const toggledTodos = state.todos.map(t =>
        t.id === todo.id ? { ...action.payload, complete: !todo.complete } : t
      );
      return { ...state, todos: toggledTodos };
    case 'UPDATE_TODO':
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
      return { ...state, todos: filteredTodos };
    default:
      return state;
  }
}
