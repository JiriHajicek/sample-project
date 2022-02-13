import {CHANGE_GLOBAL_FILTER} from './actions';
import {ActionTypes, FilterValue} from './types';

const initialState: FilterValue = FilterValue.ALL;

const globalFilter = (state: FilterValue = initialState, action: ActionTypes): FilterValue => {
  switch (action.type) {
    case CHANGE_GLOBAL_FILTER:
      return action.value;
  }
  return state;
};
export default globalFilter;
