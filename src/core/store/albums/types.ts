import { IAlbumItem } from '../../types/IAlbumItem';


export interface IAlbumsState {
  isLoading: boolean;
  list: IAlbumItem[];
}
