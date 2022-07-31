import React, { FC, useState } from 'react';

interface IProps {
  placeholder?: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
}

const Input: FC<IProps> = (props) => {
  const { placeholder, type, value, onChange } = props;

  const addNew = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={addNew}
      />
    </div>
  );
};

export default Input;
