import React, { FC, useCallback } from 'react';
import Button from 'components/Button';
import { setCategory } from 'redux/actions/actions';
import { useDispatch } from 'react-redux';

const CategoryItem: FC<{
  title: string;
  categoryId: string;
}> = (props) => {
  const { title, categoryId } = props;
  const dispatch = useDispatch();
  const setOnClick = useCallback(() => {
    dispatch(setCategory(categoryId));
    console.log(categoryId);
  }, [dispatch, categoryId]);

  return <Button text={title} onClick={setOnClick} />;
};

export default CategoryItem;
