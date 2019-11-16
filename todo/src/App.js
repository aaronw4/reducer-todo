import React, {useState, useReducer} from 'react';
import {initialState, todoReducter} from './reducers/reducer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div>
      <TodoForm/>
      <TodoList/>
    </div>
  );
}

export default App;
