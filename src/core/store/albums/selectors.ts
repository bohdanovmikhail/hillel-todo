import { IAlbumItem } from '../../types/IAlbumItem';
import { IState } from '../state';
import { IAlbumsState } from './types';

export function selectAlbums(state: IState): IAlbumsState {
  return state.albums;
}

export function selectAlbumsIsLoading(state: IState): boolean {
  return selectAlbums(state).isLoading;
}

export function selectAlbumsList(state: IState): IAlbumItem[] {
  return selectAlbums(state).list;
}
