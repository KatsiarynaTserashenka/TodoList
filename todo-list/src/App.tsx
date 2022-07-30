import React from 'react';
import './App.css';
import TodoList from 'components/TodoList';
import CategoryList from 'components/CategoryList';

function App() {
  return (
    <div className="App">
      <CategoryList />
      <TodoList />
    </div>
  );
}

export default App;
