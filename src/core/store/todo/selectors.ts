import { ITodoItem } from '../../types';
import { IState } from '../state';
import { IToDoState, IToDoListMap } from './types';

export function selectToDo(state: IState): IToDoState {
  return state.todo;
}

export function selectToDoIsLoading(state: IState): boolean {
  return selectToDo(state).isLoading;
}

export function selectToDoList(state: IState): ITodoItem[] {
  return selectToDo(state).list;
}

export function selectToDoMap(state: IState): IToDoListMap {
  return selectToDo(state).map;
}
