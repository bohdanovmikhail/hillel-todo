import { combineReducers } from 'redux';
import _ from 'lodash';

import { ITodoItem } from '../../types';
import { todoFetch } from './actions';
import { IToDoListMap, IToDoState } from './types';

export default combineReducers<IToDoState>({
  isLoading: isLoadingReducer,
  list: listReducer,
  map: mapReducer,
});

function isLoadingReducer(state: boolean = false, action): boolean {
  switch (action.type) {
    case todoFetch.START:
      return true;

    case todoFetch.SUCCESS:
    case todoFetch.FAILURE:
      return false;

    default:
      return state;
  }
}

function listReducer(state: ITodoItem[] = [], action): ITodoItem[] {
  switch (action.type) {
    case todoFetch.SUCCESS:
      return action.payload;

    default:
      return state;
  }
}

function mapReducer(state: IToDoListMap = {}, action): IToDoListMap {
  switch (action.type) {
    case todoFetch.SUCCESS:
      return _.keyBy(action.payload, 'id');

    default:
      return state;
  }
}
