export default function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_TODO':
      const todo = action.payload;
      const toggledTodos = state.todos.map(t =>
        t.id === todo.id ? { ...action.payload, complete: !todo.complete } : t
      );
      return { ...state, todos: toggledTodos };
    default:
      return state;
  }
}
