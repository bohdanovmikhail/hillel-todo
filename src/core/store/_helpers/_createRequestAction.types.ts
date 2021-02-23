import { IActionCreator, IErrorActionCreator, IPayloadActionCreator } from './_createAction.types';


export type IRequestActionCreator<Params> = (params: Params) => void;
export type IRequestActionTypes<Result> = {
  START: string;
  SUCCESS: string;
  FAILURE: string;

  START_CREATOR: IActionCreator;
  SUCCESS_CREATOR: IPayloadActionCreator<Result>;
  FAILURE_CREATOR: IErrorActionCreator;
};

export type IRequestAction<Params, Result> = IRequestActionCreator<Params> & IRequestActionTypes<Result>;
