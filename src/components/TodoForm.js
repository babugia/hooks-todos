import React, { useState, useEffect, useContext } from 'react';
import TodosContext from '../context';

export default function TodoForm() {
  const [todo, setTodo] = useState('');
  const {
    state: { currentTodo = {} },
    dispatch
  } = useContext(TodosContext);

  useEffect(() => {
    setTodo(currentTodo.text || '');
  }, [currentTodo.id]);

  const handleSubmit = event => {
    event.preventDefault();
    const action = currentTodo.text ? 'UPDATE_TODO' : 'ADD_TODO';
    dispatch({ type: action, payload: todo });
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit} action='' className='flex justify-center p-5'>
      <input
        type='text'
        className='border-black border-solid border-2'
        onChange={event => setTodo(event.target.value)}
        value={todo}
      />
    </form>
  );
}
