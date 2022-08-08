import React, { FC, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'components/Button';
import { addCategory } from 'redux/actions/actions';

const CategoryInput: FC = () => {
  const [categoryInput, setCategoryInput] = useState('');
  const dispatch = useDispatch();

  const addOnClick = useCallback(() => {
    dispatch(addCategory(categoryInput));
    setCategoryInput('');
  }, [dispatch, categoryInput]);

  return (
    <div>
      <input
        type="text"
        placeholder="Add category"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCategoryInput(e.target.value)
        }
        value={categoryInput}
      />
      <Button text="Add" onClick={addOnClick} />
    </div>
  );
};

export default CategoryInput;
