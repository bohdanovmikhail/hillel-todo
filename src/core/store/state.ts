import { IAlbumsState } from './albums';
import { IToDoState } from './todo';
import { IUsersState } from './users';


export interface IState {
  todo: IToDoState;
  users: IUsersState;
  albums: IAlbumsState;
}
