import { ITodoItem } from '../../types';


export interface IToDoState {
  isLoading: boolean;
  list: ITodoItem[];
}
