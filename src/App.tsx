import React from 'react';
import './App.scss';
import Inputbox from './components/Inputbox';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>To Do アプリ 2023/5/29（２）</h1>
      <Inputbox />
      <TodoList />
    </div>
  );
}

export default App;
