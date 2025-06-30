import { call, put, takeLatest } from 'redux-saga/effects';
import { apiProjectEndpointOverview } from '@/services/index';
import { AxiosResponse } from 'axios';
import {  
    GET_ENPOINT_OVERVIEW_REQUEST,
    GET_ENPOINT_OVERVIEW_SUCCESS,
    EndpointOverviewPayload
} from './endpointOverviewAction';

function* fetchEndpointOverviewSaga(
    action: { type: string; payload: EndpointOverviewPayload }
): Generator<any, void, AxiosResponse> {
    try {
        const response = yield call(apiProjectEndpointOverview, {
            projectId: action.payload.projectId,
        });
        yield put({
            type: GET_ENPOINT_OVERVIEW_SUCCESS,
            payload: response.data,
        });
    } catch (error: any) {
        console.error('Error fetching endpoint overview:', error);
    }
}

export function* endpointOverviewSaga() {
    yield takeLatest(GET_ENPOINT_OVERVIEW_REQUEST, fetchEndpointOverviewSaga);

}
