import { TodoAPI } from './TodoAPI';
import { IBaseAPIOptions } from './types';
import { UsersAPI } from './UsersAPI';

export const todoAPI = new TodoAPI();
export const usersAPI = new UsersAPI();

export function initAPI(baseOptions: IBaseAPIOptions) {
  todoAPI.init(baseOptions);
  usersAPI.init(baseOptions);
}

