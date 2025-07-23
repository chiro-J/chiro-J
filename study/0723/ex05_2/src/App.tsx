import React from 'react';
import './App.css';

import Counter from './components/Counter';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="App">
      <h1>Zustand 실습</h1>
      <Counter />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
