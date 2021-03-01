import { Initiable, ITodoItem } from '../types';
import { IBaseAPIOptions } from './types';
import { BaseAPI } from './_BaseAPI';

export class TodoAPI extends BaseAPI implements Initiable<ToDoAPIOptions> {
  public async getAll() {
    if (!this.api) {
      throw new Error('TodoAPI is not initialized');
    }

    return this.api.get<ITodoItem[]>('/todo');
  }

  public async create(item: ITodoItem) {
    if (!this.api) {
      throw new Error('TodoAPI is not initialized');
    }

    return this.api.post(`/todo`, item);
  }

  public async update(item: ITodoItem) {
    if (!this.api) {
      throw new Error('TodoAPI is not initialized');
    }

    return this.api.put(`/todo/${item.id}`, item);
  }

  public async delete(item: ITodoItem) {
    if (!this.api) {
      throw new Error('TodoAPI is not initialized');
    }

    return this.api.delete(`/todo/${item.id}`);
  }
}

interface ToDoAPIOptions extends IBaseAPIOptions {
}
