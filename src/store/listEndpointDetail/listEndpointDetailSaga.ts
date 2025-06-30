import { call, put, takeLatest } from 'redux-saga/effects';
import { apiListEndpointDetail } from '@/services/index';
import { AxiosResponse } from 'axios';
import {
    GET_LIST_ENDPOINT_DETAIL_REQUEST,
    GET_LIST_ENDPOINT_DETAIL_SUCCESS,
    ListEndpointDetailPayload
} from './listEndpointDetailAction';

function* fetchEndpointDetailSaga(
    action: { type: string; payload: ListEndpointDetailPayload }
): Generator<any, void, AxiosResponse> {
    try {
        const response = yield call(apiListEndpointDetail, {
            projectId: action.payload.projectId,
        });
        yield put({
            type: GET_LIST_ENDPOINT_DETAIL_SUCCESS,
            payload: response.data,
        });
    } catch (error: any) {
        console.error('Error fetching endpoint details:', error);
    }
}
export function* listEndpointDetailSaga() {
    yield takeLatest(GET_LIST_ENDPOINT_DETAIL_REQUEST, fetchEndpointDetailSaga);
}