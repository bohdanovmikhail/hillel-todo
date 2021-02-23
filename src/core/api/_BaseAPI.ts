import axios, { AxiosInstance } from 'axios';

import { IBaseAPIOptions } from './types';


export class BaseAPI {
  protected api: AxiosInstance;

  public init(options: IBaseAPIOptions): void {
    this.api = axios.create({
      baseURL: `https://600d9cedf979dd001745ce20.mockapi.io/`,
    });
  }

}
