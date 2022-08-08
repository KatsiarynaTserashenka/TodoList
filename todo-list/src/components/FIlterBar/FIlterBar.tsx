import React, { FC } from 'react';

const FilterBar: FC = () => {
  return (
    <>
      <h1>To-Do List</h1>
      <div>
        <input type="checkbox" />
        <span>Show done</span>
        {/* <Input type="search" placeholder="Search" /> */}
      </div>
    </>
  );
};

export default FilterBar;
