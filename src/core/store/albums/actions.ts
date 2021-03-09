import { albumsAPI } from '../../api';
import { createRESTAPIActions } from '../_helpers/_createRESTAPIActions';
import { IAlbumItem } from '../../types/IAlbumItem';

const albumsActions = createRESTAPIActions<IAlbumItem>('ALBUMS', albumsAPI);

export const albumsGetAll = albumsActions.getAll;
export const albumsCreate = albumsActions.create;
export const albumsUpdate = albumsActions.update;
export const albumsDelete = albumsActions.delete;
