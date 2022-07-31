import React, { FC, useState } from 'react';
import CategoryItem from 'components/CategoryItem';
import Input from 'components/Input';
import Button from 'components/Button';

const CategoryList: FC = () => {
  const [newCategory, setNewCategory] = useState('');
  const [categories, setCategories] = useState<Array<{}>>([]);

  const handleChange = (newCategory: string) => {
    setNewCategory(newCategory);
  };

  const addCategory = () => {
    if (!newCategory) {
      alert('Enter new category!');
      return;
    }

    const category = {
      id: Math.floor(Math.random() * 1000),
      title: newCategory,
    };

    setCategories((oldList) => [...oldList, category]);
    setNewCategory('');
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="New category"
        value={newCategory}
        onChange={handleChange}
      />
      <Button text="Add category" onClick={addCategory} />
      <div>
        {categories.map((category: any) => {
          return <CategoryItem key={category.id} title={category.title} />;
        })}
      </div>
    </div>
  );
};

export default CategoryList;
