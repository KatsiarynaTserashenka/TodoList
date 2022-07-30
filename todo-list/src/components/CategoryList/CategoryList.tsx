import React from 'react';
import CategoryItem from 'components/CategoryItem';
import Input from 'components/Input';
import Button from 'components/Button';

const CategoryList = () => {
  return (
    <div>
      <Input text="New category" />
      <Button text="Add category" />
      <CategoryItem />
    </div>
  );
};

export default CategoryList;
