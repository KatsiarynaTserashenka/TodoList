import { Action } from 'redux';
import { ActionPayload } from 'redux/models/ActionPayload';
import { FilterType } from '../models/FilterType';
import { Todo } from 'redux/models/Todo';
import { v4 as uuidv4 } from 'uuid';
import { Category } from 'redux/models/Category';

export enum ActionType {
  ADD_TODO = 'ADD_TODO',
  ADD_CATEGORY = 'ADD_CATEGORY',
  COMPLETE_TODO = 'COMPLETE_TODO',
  EDIT_TODO = 'EDIT_TODO',
  EDIT_CATEGORY = 'EDIT_CATEGORY',
  DELETE_TODO = 'DELETE_TODO',
  DELETE_CATEGORY = 'DELETE_CATEGORY',
  DELETE_ALL_TODOS = 'DELETE_ALL_TODOS',
  DELETE_ALL_CATEGORIES = 'DELETE_ALL_CATEGORIES',
  DELETE_DONE_TODOS = 'DELETE_DONE_TODOS',
  SET_FILTER = 'SET_FILTER',
  SET_SEARCH_STRING = 'SET_SEARCH_STRING',
}

export type AddTodoAction = ActionPayload<ActionType.ADD_TODO, Todo>;
export type AddCategoryAction = ActionPayload<
  ActionType.ADD_CATEGORY,
  Category
>;
export type CompleteTodoAction = ActionPayload<
  ActionType.COMPLETE_TODO,
  string
>;
export type EditTodoAction = ActionPayload<
  ActionType.EDIT_TODO,
  { id: string; title: string }
>;
export type EditCategoryAction = ActionPayload<
  ActionType.EDIT_CATEGORY,
  { id: string; title: string }
>;
export type DeleteTodoAction = ActionPayload<ActionType.DELETE_TODO, string>;
export type DeleteCategoryAction = ActionPayload<
  ActionType.DELETE_CATEGORY,
  string
>;
export type DeleteDoneTodosAction = Action<ActionType.DELETE_DONE_TODOS>;
export type DeleteAllTodosAction = Action<ActionType.DELETE_ALL_TODOS>;
export type DeleteAllCategoriesAction =
  Action<ActionType.DELETE_ALL_CATEGORIES>;
export type SetFilterAction = ActionPayload<ActionType.SET_FILTER, FilterType>;
export type SetSearchStringAction = ActionPayload<
  ActionType.SET_SEARCH_STRING,
  string
>;

export const addTodo = (title: string): AddTodoAction => ({
  type: ActionType.ADD_TODO,
  payload: {
    id: uuidv4(),
    title,
    isDone: false,
  },
});

export const addCategory = (title: string): AddCategoryAction => ({
  type: ActionType.ADD_CATEGORY,
  payload: {
    id: uuidv4(),
    title,
  },
});

export const completeTodo = (id: string): CompleteTodoAction => ({
  type: ActionType.COMPLETE_TODO,
  payload: id,
});

export const editTodo = (id: string, title: string): EditTodoAction => ({
  type: ActionType.EDIT_TODO,
  payload: {
    id,
    title,
  },
});

export const editCategory = (
  id: string,
  title: string
): EditCategoryAction => ({
  type: ActionType.EDIT_CATEGORY,
  payload: {
    id,
    title,
  },
});

export const deleteTodo = (id: string): DeleteTodoAction => ({
  type: ActionType.DELETE_TODO,
  payload: id,
});

export const deleteCategory = (id: string): DeleteCategoryAction => ({
  type: ActionType.DELETE_CATEGORY,
  payload: id,
});

export const deleteDoneTodos = (): DeleteDoneTodosAction => ({
  type: ActionType.DELETE_DONE_TODOS,
});

export const deleteAllTodos = (): DeleteAllTodosAction => ({
  type: ActionType.DELETE_ALL_TODOS,
});

export const deleteAllCategories = (): DeleteAllCategoriesAction => ({
  type: ActionType.DELETE_ALL_CATEGORIES,
});

export const setFilter = (filter: FilterType): SetFilterAction => ({
  type: ActionType.SET_FILTER,
  payload: filter,
});

export const setSearchString = (
  searchString: string
): SetSearchStringAction => ({
  type: ActionType.SET_SEARCH_STRING,
  payload: searchString,
});
