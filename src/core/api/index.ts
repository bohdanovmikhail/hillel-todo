import { TodoAPI } from './TodoAPI';
import { IBaseAPIOptions } from './types';

export const todoAPI = new TodoAPI();

export function initAPI(baseOptions: IBaseAPIOptions) {
  todoAPI.init(baseOptions);
}

