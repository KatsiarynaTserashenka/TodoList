import React, { FC } from 'react';

const CategoryItem: FC<{ title: string }> = (props) => {
  const { title } = props;
  return <div>{title}</div>;
};

export default CategoryItem;
