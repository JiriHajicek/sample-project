import moment from 'moment';
import {
  ADD_SECTION,
  ADD_TASK,
  TOGGLE_TASK,
  REMOVE_TASK,
  REMOVE_SECTION,
  SECTIOM_MARK_ALL_DONE,
  REMOVE_ALL,
  REMOVE_ALL_DONE,
  EDIT_TASK,
} from './actions';
import {ActionTypes, PriorityValue, SectionModel} from './types';

const initialState: SectionModel[] = [];

const sections = (state: SectionModel[] = initialState, action: ActionTypes): SectionModel[] => {
  switch (action.type) {
    case ADD_SECTION: {
      const nextId = Math.max(...state.map((e) => e.id), -1) + 1;
      return [...state, {id: nextId, title: action.title, tasks: []}];
    }
    case ADD_TASK: {
      const selectedSection = state.find((section) => section.id === action.sectionId);
      const nextTaskId = Math.max(...(selectedSection?.tasks.map((e) => e.id) || []), -1) + 1;

      return state.map((section) =>
        section.id === action.sectionId
          ? {
              ...section,
              tasks: [
                ...section.tasks,
                {
                  id: nextTaskId,
                  title: action.title,
                  description: '',
                  createdAt: moment().toISOString(true),
                  userName: 'Jiří Hájíček',
                  done: false,
                  priority: PriorityValue.NONE,
                },
              ],
            }
          : section
      );
    }
    case TOGGLE_TASK: {
      return state.map((section) =>
        section.id === action.sectionId
          ? {
              ...section,
              tasks: section.tasks.map((task) =>
                task.id === action.taskId ? {...task, done: !task.done} : task
              ),
            }
          : section
      );
    }
    case REMOVE_TASK: {
      return state.map((section) =>
        section.id === action.sectionId
          ? {
              ...section,
              tasks: section.tasks.filter((task) => task.id !== action.taskId),
            }
          : section
      );
    }
    case REMOVE_SECTION: {
      return state.filter((section) => section.id !== action.sectionId);
    }
    case SECTIOM_MARK_ALL_DONE: {
      return state.map((section) =>
        section.id === action.sectionId
          ? {...section, tasks: section.tasks.map((task) => ({...task, done: true}))}
          : section
      );
    }
    case REMOVE_ALL: {
      return [];
    }
    case REMOVE_ALL_DONE: {
      return state.map((section) => ({
        ...section,
        tasks: section.tasks.filter((task) => !task.done),
      }));
    }
    case EDIT_TASK:
      return state.map((section) =>
        section.id === action.sectionId
          ? {
              ...section,
              tasks: section.tasks.map((task) => (task.id === action.task.id ? action.task : task)),
            }
          : section
      );
  }
  return state;
};
export default sections;
