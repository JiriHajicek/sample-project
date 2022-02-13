import {ActionTypes, FilterValue, TaskModel} from './types';

export const ADD_SECTION = 'ADD_SECTION';
export const SECTIOM_MARK_ALL_DONE = 'SECTIOM_MARK_ALL_DONE';
export const REMOVE_SECTION = 'REMOVE_SECTION';
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const REMOVE_ALL = 'REMOVE_ALL';
export const REMOVE_ALL_DONE = 'REMOVE_ALL_DONE';
export const CHANGE_GLOBAL_FILTER = 'CHANGE_GLOBAL_FILTER';
export const OPEN_EDIT = 'OPEN_EDIT';
export const CLOSE_EDIT = 'CLOSE_EDIT';
export const EDIT_TASK = 'EDIT_TASK';

export const addSection = (title: string): ActionTypes => ({
  type: ADD_SECTION,
  title,
});

export const sectionMarkAllDone = (sectionId: number): ActionTypes => ({
  type: SECTIOM_MARK_ALL_DONE,
  sectionId,
});

export const removeSection = (sectionId: number): ActionTypes => ({
  type: REMOVE_SECTION,
  sectionId,
});

export const addTask = (sectionId: number, title: string): ActionTypes => ({
  type: ADD_TASK,
  sectionId,
  title,
});

export const toggleTask = (sectionId: number, taskId: number): ActionTypes => ({
  type: TOGGLE_TASK,
  sectionId,
  taskId,
});

export const removeTask = (sectionId: number, taskId: number): ActionTypes => ({
  type: REMOVE_TASK,
  sectionId,
  taskId,
});

export const removeAll = (): ActionTypes => ({type: REMOVE_ALL});

export const removeAllDone = (): ActionTypes => ({type: REMOVE_ALL_DONE});

export const changeGlobalFilter = (value: FilterValue): ActionTypes => ({
  type: CHANGE_GLOBAL_FILTER,
  value,
});

export const openEditTask = (sectionId: number, task: TaskModel): ActionTypes => ({
  type: OPEN_EDIT,
  task,
  sectionId,
});

export const closeEdit = (): ActionTypes => ({
  type: CLOSE_EDIT,
});

export const editTask = (sectionId: number, task: TaskModel): ActionTypes => ({
  type: EDIT_TASK,
  task,
  sectionId,
});
