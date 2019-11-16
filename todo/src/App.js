import React, {useState, useReducer} from 'react';
import {initialState, todoReducer} from './reducers/reducer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addItem = task => {
    dispatch({ type: 'addToList', payload: task.target.value})
  }

  return (
    <div>
      <TodoForm
        state={state}
        dispatch={dispatch}
      />
      <TodoList 
        state={state}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
