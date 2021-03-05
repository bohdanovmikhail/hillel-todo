import { IBaseItem } from './IBaseItem';

export interface ITodoItem extends IBaseItem {
  text: string;
  done: boolean;
}
