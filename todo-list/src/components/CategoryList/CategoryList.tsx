import React, { FC, useState } from 'react';
import CategoryItem from 'components/CategoryItem';
import Input from 'components/Input';
import Button from 'components/Button';

interface IProps {
  /* category: string; */
  /* categories: []; */
}

const CategoryList: React.FC<IProps> = (props) => {
  /* const { categories } = props; */
  const [newCategory, setNewCategory] = useState('');
  const [categories, setCategories] = useState<Array<{}>>([]);

  const handleChange = (newCategory: string) => {
    setNewCategory(newCategory);
  };

  const addCategory = () => {
    if (!newCategory) {
      alert('Enter new category');
      return;
    }

    const category = {
      id: Math.floor(Math.random() * 1000),
      title: newCategory,
    };

    setCategories((oldList) => [...oldList, category]);
    setNewCategory('');

    console.log(category);
    console.log(categories);
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="New category"
        newCategory={newCategory}
        onChange={handleChange}
      />
      <Button text="Add category" onClick={addCategory} />
      <ul>
        {categories.map((category: any) => {
          return (
            <li>
              <CategoryItem key={category.id} title={category.title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryList;
