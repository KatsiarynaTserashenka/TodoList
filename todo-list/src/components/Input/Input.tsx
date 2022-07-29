import React, { FC } from 'react';

interface IProps {
  text: string;
}

const Input: FC<IProps> = (props) => {
  const { text } = props;

  return (
    <div>
      <input type="text" placeholder={text} />
    </div>
  );
};

export default Input;
