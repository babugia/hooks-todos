import React from 'react';

const TodosContext = React.createContext({
  todos: [
    { id: 1, text: 'eat breakfast', complete: false },
    { id: 2, text: 'drink water', complete: false }
  ]
});

export default TodosContext;
