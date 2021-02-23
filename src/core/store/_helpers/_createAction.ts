import {
  IActionCreator,
  IPayloadActionCreator,
  IErrorActionCreator,
} from './_createAction.types';

export function createAction(type: string): IActionCreator {
  const actionCreator: IActionCreator = () => ({ type });

  actionCreator.toString = () => type;
  actionCreator.valueOf = () => type;

  return actionCreator;
}

export function createPayloadAction<Payload>(type: string): IPayloadActionCreator<Payload> {
  const actionCreator: IPayloadActionCreator<Payload> = (payload: Payload) => ({ type, payload });

  actionCreator.toString = () => type;
  actionCreator.valueOf = () => type;

  return actionCreator;
}

export function createErrorAction(type: string): IErrorActionCreator {
  const actionCreator: IErrorActionCreator = (error: Error) => ({ type, error });

  actionCreator.toString = () => type;
  actionCreator.valueOf = () => type;

  return actionCreator;
}
