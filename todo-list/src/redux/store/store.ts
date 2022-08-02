import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { reducer } from 'redux/reducers/reducer';

const rootReducer = combineReducers({
  todos: reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const globalWindow = window as any;

export const store = createStore(
  rootReducer,
  globalWindow.__REDUX_DEVTOOLS_EXTENSION__ &&
    globalWindow.__REDUX_DEVTOOLS_EXTENSION__()
);
