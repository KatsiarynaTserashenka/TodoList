import React, { FC } from 'react';
import CategoryItem from 'components/CategoryItem';
import CategoryInput from 'components/CategoryInput';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store/store';
import { Category } from 'redux/models/Category';

const CategoryList: FC = () => {
  const categoryList = useSelector((state: RootState) => {
    return state.items.categoryItems;
  });

  return (
    <div>
      <CategoryInput />
      <div>
        {categoryList.map((category: Category) => {
          return (
            <CategoryItem
              key={category.id}
              title={category.title}
              categoryId={category.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
