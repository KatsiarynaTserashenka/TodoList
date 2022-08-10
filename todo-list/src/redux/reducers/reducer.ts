import { Todo } from 'redux/models/Todo';
import { ActionType, SetSearchStringAction } from 'redux/actions/actions';
import {
  AddTodoAction,
  AddCategoryAction,
  EditCategoryAction,
  EditTodoAction,
  DeleteAllTodosAction,
  DeleteCategoryAction,
  DeleteDoneTodosAction,
  DeleteTodoAction,
  DeleteAllCategoriesAction,
  CompleteTodoAction,
  SetFilterAction,
} from 'redux/actions/actions';
import { FilterType } from 'redux/models/FilterType';
import { Category } from 'redux/models/Category';

export type State = {
  todoItems: Array<Todo>;
  categoryItems: Array<Category>;
  filter: FilterType;
  searchString: string;
};

const persistedTodos = localStorage.getItem('todoItems');
let todoItems: Array<Todo> = [];

if (persistedTodos !== null) {
  todoItems = JSON.parse(persistedTodos);
}

const persistedCategories = localStorage.getItem('catergoryItems');
let categoryItems: Array<Category> = [];

if (persistedCategories !== null) {
  categoryItems = JSON.parse(persistedCategories);
}

const persistedFilter = localStorage.getItem('filter');
let filter: FilterType = FilterType.ALL;

if (persistedFilter !== null) {
  filter = JSON.parse(persistedFilter);
}

const initialState: State = {
  todoItems,
  categoryItems,
  filter: filter,
  searchString: '',
};

type ActionTypes =
  | AddTodoAction
  | AddCategoryAction
  | EditCategoryAction
  | EditTodoAction
  | DeleteAllTodosAction
  | DeleteAllCategoriesAction
  | DeleteCategoryAction
  | DeleteDoneTodosAction
  | DeleteTodoAction
  | CompleteTodoAction
  | SetFilterAction
  | SetSearchStringAction;

export const reducer = (state: State = initialState, action: ActionTypes) => {
  switch (action.type) {
    case ActionType.ADD_TODO: {
      return {
        ...state,
        todoItems: state.todoItems.concat(action.payload),
      };
    }

    case ActionType.ADD_CATEGORY: {
      return {
        ...state,
        categoryItems: state.categoryItems.concat(action.payload),
      };
    }

    case ActionType.COMPLETE_TODO: {
      return {
        ...state,
        todoItems: state.todoItems.map((todoItem) => {
          if (todoItem.id === action.payload) {
            return {
              ...todoItem,
              isDone: !todoItem.isDone,
            };
          }
          return todoItem;
        }),
      };
    }

    case ActionType.EDIT_TODO: {
      return {
        ...state,
        todoItems: state.todoItems.map((todoItem) => {
          if (todoItem.id === action.payload.id) {
            return {
              ...todoItem,
              title: action.payload.title,
            };
          }
          return todoItem;
        }),
      };
    }

    case ActionType.EDIT_CATEGORY: {
      return {
        ...state,
        categoryItems: state.categoryItems.map((categoryItem) => {
          if (categoryItem.id === action.payload.id) {
            return {
              ...categoryItem,
              title: action.payload.title,
            };
          }
          return categoryItem;
        }),
      };
    }

    case ActionType.DELETE_TODO: {
      return {
        ...state,
        todoItems: state.todoItems.filter((todo) => todo.id !== action.payload),
      };
    }

    case ActionType.DELETE_CATEGORY: {
      return {
        ...state,
        categoryItems: state.categoryItems.filter(
          (category) => category.id !== action.payload
        ),
      };
    }

    case ActionType.DELETE_DONE_TODOS: {
      return {
        ...state,
        todoItems: state.todoItems.filter((todoItem) => !todoItem.isDone),
      };
    }

    case ActionType.DELETE_ALL_TODOS: {
      return {
        ...state,
        todoItems: [],
      };
    }

    case ActionType.DELETE_ALL_CATEGORIES: {
      return {
        ...state,
        categoryItems: [],
      };
    }

    case ActionType.SET_FILTER: {
      return {
        ...state,
        filter: action.payload,
      };
    }

    case ActionType.SET_SEARCH_STRING: {
      return {
        ...state,
        searchString: action.payload,
      };
    }

    default:
      return state;
  }
};
