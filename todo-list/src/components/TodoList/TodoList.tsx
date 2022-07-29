import React from 'react';
import TodoItem from 'components/TodoItem';
/* import TodoInput from 'components/TodoInput'; */

const TodoList = () => {
  return (
    <div data-testid="todo-container">
      <h2>TodoList</h2>
      <TodoItem />
    </div>
  );
};

export default TodoList;
