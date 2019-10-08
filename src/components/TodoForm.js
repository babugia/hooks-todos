import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import uuidv4 from 'uuid/v4';
import TodosContext from '../context';

export default function TodoForm() {
  const [todo, setTodo] = useState('');
  const {
    state: { currentTodo = {} },
    dispatch
  } = useContext(TodosContext);

  useEffect(() => {
    setTodo(currentTodo.text || '');
  }, [currentTodo]);

  const update = async () => {};

  const handleSubmit = async event => {
    event.preventDefault();
    const action = currentTodo.text ? 'UPDATE_TODO' : 'ADD_TODO';
    // FIXME: update don't working
    const response = await axios.post(
      'https://hooks-api.babugia.now.sh/todos',
      {
        id: uuidv4(),
        text: todo,
        complete: false
      }
    );
    dispatch({ type: action, payload: response.data });
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
