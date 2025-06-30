import { call, put, takeLatest } from 'redux-saga/effects';
import {
  POST_ADD_REQUEST_INFO_REQUEST,
  POST_ADD_REQUEST_INFO_SUCCESS,
  POST_ADD_REQUEST_INFO_FAILURE,
    AddRequestInfoPayload,
} from "./addRequestInfoAction";

import { apiAddRequestInfo } from '@/services/index';
import { AxiosResponse } from 'axios';

function* postAddRequestInfoSaga(
  action: { type: string; payload: AddRequestInfoPayload }
): Generator<any, void, AxiosResponse> {
  try {
    const response = yield call(apiAddRequestInfo, action.payload);
    yield put({ type: POST_ADD_REQUEST_INFO_SUCCESS, payload: response.data });
  } catch (error: any) {
    yield put({ type: POST_ADD_REQUEST_INFO_FAILURE, payload: error.message });
  }
}

export default function* watchAddRequestInfoSaga(): Generator {
  yield takeLatest(POST_ADD_REQUEST_INFO_REQUEST, postAddRequestInfoSaga);
}