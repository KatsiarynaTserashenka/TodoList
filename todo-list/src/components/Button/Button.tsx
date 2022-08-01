import React, { FC } from 'react';

interface IProps {
  text: string;
  onClick?: () => void;
  deleteButton?: boolean;
  filterButton?: boolean;
  saveButton?: boolean;
}

const Button: FC<IProps> = (props) => {
  const { text, onClick } = props;

  return <button onClick={onClick}>{text}</button>;
};

export default Button;
