import React from 'react';
import './App.css';
import TodoList from 'components/TodoList';
import CategoryList from 'components/CategoryList';
import FilterBar from 'components/FIlterBar';

function App() {
  return (
    <div className="App">
      <FilterBar />
      <CategoryList />
      <TodoList />
    </div>
  );
}

export default App;
