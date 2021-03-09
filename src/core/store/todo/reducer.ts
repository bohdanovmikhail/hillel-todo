import { combineReducers } from 'redux';

import { ITodoItem } from '../../types';
import { todoGetAll, todoUpdate, todoDelete } from './actions';
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

    case todoUpdate.SUCCESS:
      return state.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }

        return item;
      });

    case todoDelete.SUCCESS:
      return state.filter(todo => todo.id !== action.payload.id);

    default:
      return state;
  }
}
