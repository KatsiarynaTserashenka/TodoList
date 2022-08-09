import React, { FC } from 'react';

const FilterBar: FC = () => {
  return (
    <>
      <h1>To-Do List</h1>
      <div>
        <input type="checkbox" />
        <span>Show done</span>
        <input type="checkbox" />
        <span>Show in progress</span>
        <input type="search" placeholder="Search" />
      </div>
    </>
  );
};

export default FilterBar;
