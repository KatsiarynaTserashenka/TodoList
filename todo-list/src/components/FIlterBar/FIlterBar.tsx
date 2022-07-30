import React, { FC } from 'react';
import Input from 'components/Input';

const FilterBar: FC = () => {
  return (
    <>
      <h1>To-Do List</h1>
      <div>
        <Input type="checkbox" />
        <Input type="search" text="Search" />
      </div>
    </>
  );
};

export default FilterBar;
