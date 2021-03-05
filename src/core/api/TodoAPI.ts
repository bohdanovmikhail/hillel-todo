import { IUserItem } from '../types';
import { BaseAPI } from './_BaseRESTAPI';


export class TodoAPI
  extends BaseAPI<IUserItem> {
  protected itemKey = 'todo';
}
