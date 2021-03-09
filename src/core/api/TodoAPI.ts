import { ITodoItem } from '../types';
import { BaseAPI } from './_BaseRESTAPI';


export class TodoAPI
  extends BaseAPI<ITodoItem> {
  protected itemKey = 'todo';
}
