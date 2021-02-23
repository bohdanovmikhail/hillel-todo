import { Dispatch } from 'redux';
import {
  createAction,
  createPayloadAction,
  createErrorAction,
} from './_createAction';
import { IRequestAction } from './_createRequestAction.types';

export function createRequestAction<Result = void, RequestParams = void>(
  type: string,
  handler,
  separator: string = '.',
): IRequestAction<RequestParams, Result> {
  const startType: string = type + separator + 'START';
  const successType: string = type + separator + 'SUCCESS';
  const failureType: string = type + separator + 'FAILURE';

  const start = createAction(startType);
  const success = createPayloadAction<Result>(successType);
  const failure = createErrorAction(failureType);

  actionCreator.START = startType;
  actionCreator.START_CREATOR = start;

  actionCreator.SUCCESS = successType;
  actionCreator.SUCCESS_CREATOR = success;

  actionCreator.FAILURE = failureType;
  actionCreator.FAILURE_CREATOR = failure;

  return actionCreator as IRequestAction<RequestParams, Result>;

  function actionCreator(params: RequestParams) {
    return async (dispatch: Dispatch) => {
      const startAction = start();
      dispatch(startAction);

      try {
        const result: Result = await handler(params);
        const resultAction = success(result);
        dispatch(resultAction);
      } catch (error) {
        const errorAction = failure(error);
        dispatch(errorAction);
      }
    };
  }
}
