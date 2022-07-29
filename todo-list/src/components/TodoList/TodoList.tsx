import React from 'react';
import TodoItem from 'components/TodoItem';
import Input from 'components/Input';
import Button from 'components/Button';

const TodoList = () => {
  return (
    <div>
      <Input text="New task" />
      <Button text="Add task" />
      <TodoItem />
    </div>
  );
};

export default TodoList;
