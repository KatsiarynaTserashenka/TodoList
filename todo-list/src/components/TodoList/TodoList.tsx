import React, { FC } from 'react';
import TodoItem from 'components/TodoItem';
import TodoInput from 'components/TodoInput';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store/store';
import { Todo } from 'redux/models/Todo';
import { FilterType } from 'redux/models/FilterType';

const TodoList: FC = () => {
  const todoList = useSelector((state: RootState) => {
    return state.items.todoItems;
  });
  const activeFilter = useSelector((state: RootState) => {
    return state.items.filter;
  });
  const searchString = useSelector((state: RootState) => {
    return state.items.searchString;
  });

  const filteredTodoList = todoList.filter((item) => {
    if (activeFilter === FilterType.DONE) {
      return item.isDone;
    }
    /* if (activeFilter === FilterType.TODO) {
      return !item.isDone;
    } */
    if (activeFilter === FilterType.SEARCH) {
      return item.title.toLowerCase().includes(searchString);
    }
    return true;
  });

  return (
    <div>
      <TodoInput />
      <div>
        {filteredTodoList.map((todo: Todo) => {
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
