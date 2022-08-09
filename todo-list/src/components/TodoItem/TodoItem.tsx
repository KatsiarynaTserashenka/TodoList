import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { completeTodo, editTodo, deleteTodo } from 'redux/actions/actions';
import Button from 'components/Button';
import editIcon from 'imgs/EditIcon.svg';
import deleteIcon from 'imgs/DeleteIcon.svg';

const TodoItem: FC<{ title: string; isDone: boolean; id: string }> = (
  props
) => {
  const { title, isDone, id } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const dispatch = useDispatch();

  const completeOnChange = useCallback(() => {
    dispatch(completeTodo(id));
  }, [dispatch, id]);

  const editOnClick = useCallback(() => {
    setIsEdit(true);
  }, [setIsEdit]);

  const saveOnClick = useCallback(() => {
    setIsEdit(false);
    dispatch(editTodo(id, updatedTitle));
  }, [dispatch, setIsEdit, id, updatedTitle]);

  const onChangeTitle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUpdatedTitle(e.target.value);
    },
    [setUpdatedTitle]
  );

  return (
    <div>
      {!isEdit && (
        <>
          <div>{title}</div>
          <div>
            <input
              type="checkbox"
              checked={isDone}
              onChange={completeOnChange}
            />
            <div onClick={editOnClick} data-testid="todo-start-edit">
              {/* <img src={editIcon} alt="edit" /> */}
            </div>
            <div
              onClick={() => {
                dispatch(deleteTodo(id));
              }}
              data-testid="todo-delete"
            >
              {/* <img src={deleteIcon} alt="delete" /> */}
            </div>
          </div>
        </>
      )}
      {isEdit && (
        <>
          <input
            type="text"
            value={updatedTitle}
            onChange={onChangeTitle}
            data-testid="todo-changed-title"
          />
          <Button text="Save" onClick={saveOnClick} saveButton />
        </>
      )}
    </div>
  );
};

export default TodoItem;
