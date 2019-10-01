export default function reducer(state, action) {
  const todo = action.payload;
  switch (action.type) {
    case 'TOGGLE_TODO':
      const toggledTodos = state.todos.map(t =>
        t.id === todo.id ? { ...action.payload, complete: !todo.complete } : t
      );
      return { ...state, todos: toggledTodos };
    case 'REMOVE_TODO':
      const filteredTodos = state.todos.filter(t => t.id !== todo.id);
      return { ...state, todos: filteredTodos };
    default:
      return state;
  }
}
