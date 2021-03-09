import { combineReducers } from 'redux';

import { IAlbumItem } from '../../types/IAlbumItem';
import { albumsGetAll } from './actions';
import { IAlbumsState } from './types';

export default combineReducers<IAlbumsState>({
  isLoading: isLoadingReducer,
  list: listReducer,
});

function isLoadingReducer(state: boolean = false, action): boolean {
  switch (action.type) {
    case albumsGetAll.START:
      return true;

    case albumsGetAll.SUCCESS:
    case albumsGetAll.FAILURE:
      return false;

    default:
      return state;
  }
}

function listReducer(state: IAlbumItem[] = [], action): IAlbumItem[] {
  switch (action.type) {
    case albumsGetAll.SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
