import {
  ADD_SECTION,
  SECTIOM_MARK_ALL_DONE,
  REMOVE_SECTION,
  ADD_TASK,
  TOGGLE_TASK,
  REMOVE_TASK,
  REMOVE_ALL,
  REMOVE_ALL_DONE,
  CHANGE_GLOBAL_FILTER,
  OPEN_EDIT,
  CLOSE_EDIT,
  EDIT_TASK,
} from './actions';

export interface AddSectionAction {
  type: typeof ADD_SECTION;
  title: string;
}

export interface SectionMarkAllDoneAction {
  type: typeof SECTIOM_MARK_ALL_DONE;
  sectionId: number;
}

export interface RemoveSectionAction {
  type: typeof REMOVE_SECTION;
  sectionId: number;
}

export interface AddTaskAction {
  type: typeof ADD_TASK;
  sectionId: number;
  title: string;
}

export interface ToggleTaskAction {
  type: typeof TOGGLE_TASK;
  sectionId: number;
  taskId: number;
}

export interface RemoveTaskAction {
  type: typeof REMOVE_TASK;
  sectionId: number;
  taskId: number;
}

export interface RemoveAllAction {
  type: typeof REMOVE_ALL;
}

export interface RemoveAllDoneAction {
  type: typeof REMOVE_ALL_DONE;
}

export enum PriorityValue {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
  NONE = 'none',
}

export interface TaskModel {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  userName: string;
  done: boolean;
  priority: PriorityValue;
}

export enum FilterValue {
  ALL = 'all',
  TODO = 'todo',
  DONE = 'done',
}

export interface SectionModel {
  id: number;
  title: string;
  tasks: Array<TaskModel>;
}

export interface ChangeGlobalFilterAction {
  type: typeof CHANGE_GLOBAL_FILTER;
  value: FilterValue;
}

export interface EditModel {
  task: TaskModel | null;
  open: boolean;
  sectionId: number;
}

export interface OpenEditTaskAction {
  type: typeof OPEN_EDIT;
  task: TaskModel;
  sectionId: number;
}

export interface CloseEditAction {
  type: typeof CLOSE_EDIT;
}

export interface EditTaskAction {
  type: typeof EDIT_TASK;
  task: TaskModel;
  sectionId: number;
}

export type ActionTypes =
  | AddSectionAction
  | SectionMarkAllDoneAction
  | RemoveSectionAction
  | AddTaskAction
  | ToggleTaskAction
  | RemoveTaskAction
  | RemoveAllAction
  | RemoveAllDoneAction
  | ChangeGlobalFilterAction
  | OpenEditTaskAction
  | CloseEditAction
  | EditTaskAction;
