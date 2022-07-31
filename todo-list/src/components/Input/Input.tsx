import React, { FC, useState } from 'react';

interface IProps {
  placeholder?: string;
  type: string;
  newCategory: string;
  onChange: (newCategory: string) => void;
}

const Input: FC<IProps> = (props) => {
  const { placeholder, type, newCategory, onChange } = props;

  const addNew = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={newCategory}
        onChange={addNew}
      />
    </div>
  );
};

export default Input;
