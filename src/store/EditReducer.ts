import {CLOSE_EDIT, EDIT_TASK, OPEN_EDIT} from './actions';
import {ActionTypes, EditModel} from './types';

const initialState: EditModel = {
  task: null,
  sectionId: 0,
  open: false,
};

const editReducer = (state: EditModel = initialState, action: ActionTypes): EditModel => {
  switch (action.type) {
    case OPEN_EDIT:
      return {
        open: true,
        task: action.task,
        sectionId: action.sectionId,
      };
    case CLOSE_EDIT:
      return {
        ...state,
        open: false,
      };
    case EDIT_TASK:
      return {
        ...state,
        open: false,
      };
  }
  return state;
};
export default editReducer;
