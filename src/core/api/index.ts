import { AlbumAPI } from './AlbumAPI';
import { TodoAPI } from './TodoAPI';
import { IBaseAPIOptions } from './types';
import { UsersAPI } from './UsersAPI';

export const todoAPI = new TodoAPI();
export const usersAPI = new UsersAPI();
export const albumsAPI = new AlbumAPI();

export function initAPI(baseOptions: IBaseAPIOptions) {
  todoAPI.init(baseOptions);
  usersAPI.init(baseOptions);
  albumsAPI.init(baseOptions);
}

