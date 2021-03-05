import { combineReducers } from 'redux';

import { ITodoItem } from '../../types';
import { todoGetAll } from './actions';
import { IToDoState } from './types';


export default combineReducers<IToDoState>({
  isLoading: isLoadingReducer,
  list: listReducer,
});

function isLoadingReducer(state: boolean = false, action): boolean {
  switch (action.type) {
    case todoGetAll.START:
      return true;

    case todoGetAll.SUCCESS:
    case todoGetAll.FAILURE:
      return false;

    default:
      return state;
  }
}

function listReducer(state: ITodoItem[] = [], action): ITodoItem[] {
  switch (action.type) {
    case todoGetAll.SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
