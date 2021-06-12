import React from 'react';
import logo from './logo.svg';
import TodoList from './todo/todoListComponent';
import TodoAdd from './todo/todoAddComponent';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <TodoAdd />
      <TodoList />
    </div>
  );
}

export default App;
