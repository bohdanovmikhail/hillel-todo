import { ITodoItem } from '../../types';
import { todoAPI } from '../../api';
import { createRESTAPIActions } from '../_helpers/_createRESTAPIActions';

const todoActions = createRESTAPIActions<ITodoItem>('TODO', todoAPI);

export const todoGetAll = todoActions.getAll;
export const todoCreate = todoActions.create;
export const todoUpdate = todoActions.update;
export const todoDelete = todoActions.delete;
