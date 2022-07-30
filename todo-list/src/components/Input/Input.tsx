import React, { FC } from 'react';

interface IProps {
  text?: string;
  type: string;
}

const Input: FC<IProps> = (props) => {
  const { text, type } = props;

  return (
    <div>
      <input type={type} placeholder={text} />
    </div>
  );
};

export default Input;
