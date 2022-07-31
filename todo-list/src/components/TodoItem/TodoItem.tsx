import React, { FC } from 'react';

const TodoItem: FC<{ title: string }> = (props) => {
  const { title } = props;
  return <div>{title}</div>;
};

export default TodoItem;
