import { IUserItem } from '../../types';
import { IState } from '../state';
import { IUsersState } from './types';

export function selectUsers(state: IState): IUsersState {
  return state.todo;
}

export function selectUsersIsLoading(state: IState): boolean {
  return selectUsers(state).isLoading;
}

export function selectUsersList(state: IState): IUserItem[] {
  return selectUsers(state).list;
}
