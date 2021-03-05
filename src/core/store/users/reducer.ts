import { combineReducers } from 'redux';

import { IUserItem } from '../../types';
import { usersGetAll } from './actions';
import { IUsersState } from './types';

export default combineReducers<IUsersState>({
  isLoading: isLoadingReducer,
  list: listReducer,
});

function isLoadingReducer(state: boolean = false, action): boolean {
  switch (action.type) {
    case usersGetAll.START:
      return true;

    case usersGetAll.SUCCESS:
    case usersGetAll.FAILURE:
      return false;

    default:
      return state;
  }
}

function listReducer(state: IUserItem[] = [], action): IUserItem[] {
  switch (action.type) {
    case usersGetAll.SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
