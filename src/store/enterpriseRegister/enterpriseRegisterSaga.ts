import { call, put, takeLatest } from 'redux-saga/effects';
import {
  POST_ENTERPRISE_REGISTER_REQUEST,
  POST_ENTERPRISE_REGISTER_SUCCESS,
  POST_ENTERPRISE_REGISTER_FAILURE,
  RegisterPayload,
} from './enterpriseRegisterAction';

import { apiEnterpriseRegister } from '@/services/index';
import { AxiosResponse } from 'axios';

function* postEnterpriseRegisterSaga(
  action: { type: string; payload: RegisterPayload }
): Generator<any, void, AxiosResponse> {
  try {
    const response = yield call(apiEnterpriseRegister, action.payload);
    yield put({ type: POST_ENTERPRISE_REGISTER_SUCCESS, payload: response.data });
  } catch (error: any) {
    yield put({ type: POST_ENTERPRISE_REGISTER_FAILURE, payload: error.message });
  }
}

export default function* watchEnterpriseRegisterSaga(): Generator {
  yield takeLatest(POST_ENTERPRISE_REGISTER_REQUEST, postEnterpriseRegisterSaga);
}
