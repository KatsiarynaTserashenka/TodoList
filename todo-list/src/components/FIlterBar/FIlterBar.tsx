import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter, setSearchString } from 'redux/actions/actions';
import { FilterType } from 'redux/models/FilterType';

const FilterBar: FC = () => {
  const [showDone, setShowDone] = useState(false);

  const dispatch = useDispatch();

  const onSetDone = () => {
    if (!showDone) {
      setShowDone(true);
      dispatch(setFilter(FilterType.DONE));
    } else {
      setShowDone(false);
      dispatch(setFilter(FilterType.ALL));
    }
  };

  const searchTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchString(e.target.value));
    dispatch(setFilter(FilterType.SEARCH));
  };

  return (
    <>
      <h1>To-Do List</h1>
      <div>
        <input type="checkbox" onChange={onSetDone} />
        <span>Show done</span>
        <input type="search" placeholder="Search" onChange={searchTodo} />
      </div>
    </>
  );
};

export default FilterBar;
