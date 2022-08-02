import { Todo } from 'redux/models/Todo';
import { ActionType } from 'redux/actions/todoActions';
import {
  AddTodoAction,
  CompleteTodoAction,
  EditTodoAction,
  DeleteTodoAction,
  DeleteDoneTodosAction,
  DeleteAllTodosAction,
  SetFilterAction,
} from 'redux/actions/todoActions';
import { FilterType } from 'redux/models/FilterType';

export type TodosState = {
  items: Array<Todo>;
  filter: FilterType;
};

const persistedItems = localStorage.getItem('items');
let items: Array<Todo> = [];

if (persistedItems !== null) {
  items = JSON.parse(persistedItems);
}

const persistedFilter = localStorage.getItem('filter');
let filter: FilterType = FilterType.ALL;

if (persistedFilter !== null) {
  filter = JSON.parse(persistedFilter);
}

const initialState: TodosState = {
  items: items,
  filter: filter,
};

type ActionTypes =
  | AddTodoAction
  | CompleteTodoAction
  | EditTodoAction
  | DeleteTodoAction
  | DeleteDoneTodosAction
  | DeleteAllTodosAction
  | SetFilterAction;

export const reducer = (
  state: TodosState = initialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case ActionType.ADD_TODO: {
      return {
        ...state,
        items: state.items.concat(action.payload),
      };
    }

    case ActionType.COMPLETE_TODO: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              isDone: !item.isDone,
            };
          }
          return item;
        }),
      };
    }

    case ActionType.EDIT_TODO: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              title: action.payload.title,
            };
          }
          return item;
        }),
      };
    }

    case ActionType.DELETE_TODO: {
      return {
        ...state,
        items: state.items.filter((todo) => todo.id !== action.payload),
      };
    }

    case ActionType.DELETE_DONE_TODOS: {
      return {
        ...state,
        items: state.items.filter((item) => !item.isDone),
      };
    }

    case ActionType.DELETE_ALL_TODOS: {
      return {
        ...state,
        items: [],
      };
    }

    case ActionType.SET_FILTER: {
      return {
        ...state,
        filter: action.payload,
      };
    }

    default:
      return state;
  }
};
