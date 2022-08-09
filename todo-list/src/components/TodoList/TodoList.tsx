import React, { FC } from 'react';
import TodoItem from 'components/TodoItem';
import TodoInput from 'components/TodoInput';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store/store';
import { Todo } from 'redux/models/Todo';

const TodoList: FC = () => {
  const todoList = useSelector((state: RootState) => {
    return state.items.todoItems;
  });

  return (
    <div>
      <TodoInput />
      <div>
        {todoList.map((todo: Todo) => {
          return (
            <TodoItem
              key={todo.id}
              title={todo.title}
              isDone={todo.isDone}
              id={todo.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
