import { combineReducers } from 'redux';

import todoReducer from './todo';
import { IState } from './state';

export const mainReducer = combineReducers<IState>({
  todo: todoReducer,
});

