import { ITodoItem } from '../../types';


export interface IToDoState {
  isLoading: boolean;
  list: ITodoItem[];
  map: IToDoListMap;
}

export type IToDoListMap = {
  [itemID: string]: ITodoItem;
};
