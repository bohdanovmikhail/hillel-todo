import { IAlbumItem } from '../types/IAlbumItem';
import { BaseAPI } from './_BaseRESTAPI';


export class AlbumAPI
  extends BaseAPI<IAlbumItem> {
  protected itemKey = 'albums';

  public getAlbumsForUser(userId: string): Promise<IAlbumItem[]> {
    return this.api.get(`${this.itemKey}/${userId}`);
  }
}
