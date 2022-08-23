import React, { FC, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'components/Button';
import { addTodo } from 'redux/actions/actions';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store/store';

const TodoInput: FC = () => {
  const [todoInput, setTodoInput] = useState('');
  const categoryId = useSelector((state: RootState) => {
    return state.items.categoryId;
  });
  const dispatch = useDispatch();

  const addOnClick = useCallback(() => {
    if (todoInput) {
      dispatch(addTodo(todoInput, categoryId));
      setTodoInput('');
    } else {
      alert('Enter your task!');
    }
  }, [dispatch, todoInput, categoryId]);

  return (
    <div>
      <input
        type="text"
        placeholder="Add task"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTodoInput(e.target.value)
        }
        value={todoInput}
      />
      <Button text="Add" onClick={addOnClick} />
    </div>
  );
};

export default TodoInput;
