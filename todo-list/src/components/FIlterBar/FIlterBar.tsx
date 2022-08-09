import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions/actions';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store/store';
import { FilterType } from 'redux/models/FilterType';

const FilterBar: FC = () => {
  const [showDone, setShowDone] = useState(false);
  const [showTodo, setShowTodo] = useState(false);
  const activeFilter = useSelector((state: RootState) => {
    return state.items.filter;
  });

  const dispatch = useDispatch();

  const onSetDone = () => {
    if (!showDone) {
      setShowDone(true);
      dispatch(setFilter(FilterType.DONE));
    } else {
      setShowDone(false);
      dispatch(setFilter(FilterType.ALL));
    }
    console.log(showDone);
    console.log(activeFilter);
  };

  const onSetTodo = () => {
    if (!showTodo) {
      setShowTodo(true);
      dispatch(setFilter(FilterType.TODO));
    } else {
      setShowTodo(false);
      dispatch(setFilter(FilterType.ALL));
    }
  };

  return (
    <>
      <h1>To-Do List</h1>
      <div>
        <input type="checkbox" onChange={onSetDone} />
        <span>Show done</span>
        <input type="checkbox" onClick={onSetTodo} />
        <span>Show in progress</span>
        <input type="search" placeholder="Search" />
      </div>
    </>
  );
};

export default FilterBar;
