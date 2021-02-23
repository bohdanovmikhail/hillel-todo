import { ITodoItem } from '../../types';
import { todoAPI } from '../../api';
import { createRequestAction } from '../_helpers';

const sleep = t => new Promise(r => setTimeout(r, t));

export const todoFetch = createRequestAction<ITodoItem[]>('TODO.FETCH', async () => {
  await sleep(2000);
  const result = await todoAPI.getAll();
  return result.data;
});

export const todoCreate = createRequestAction<void, ITodoItem>('TODO.CREATE', item => todoAPI.create(item));
export const todoUpdate = createRequestAction<void, ITodoItem>('TODO.UPDATE', item => todoAPI.update(item));
export const todoDelete = createRequestAction<void, ITodoItem>('TODO.DELETE', item => todoAPI.delete(item));
