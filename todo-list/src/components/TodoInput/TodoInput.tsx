import React, { FC, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'components/Button';
import { addTodo } from 'redux/actions/actions';

const TodoInput: FC = () => {
  const [todoInput, setTodoInput] = useState('');
  const dispatch = useDispatch();

  const addOnClick = useCallback(() => {
    dispatch(addTodo(todoInput));
    setTodoInput('');
  }, [dispatch, todoInput]);

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
