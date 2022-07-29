import React from 'react';
import TodoItem from 'components/TodoItem';
import Input from 'components/Input';

const TodoList = () => {
  return (
    <div data-testid="todo-container">
      <Input />
      <TodoItem />
    </div>
  );
};

export default TodoList;
