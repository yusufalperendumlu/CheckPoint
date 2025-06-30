import { call, put, takeEvery } from "redux-saga/effects";
import { apiBaseURLAccordingToProject } from "@/services/index";
import { AxiosResponse } from "axios";
import {
    GET_BASE_URL_ACCORDING,
    GET_BASE_URL_ACCORDING_SUCCESS,
} from "./baseUrlAccordingAction";

function* fetchBaseUrlAccordingSaga(
    action: { type: string; payload: { projectId: number} }
): Generator<any, void, AxiosResponse> {
    try {
        const response = yield call(apiBaseURLAccordingToProject, {
            projectId: action.payload.projectId,
        });
        yield put({
            type: GET_BASE_URL_ACCORDING_SUCCESS,
            payload: { baseUrl: response.data},
        });
    } catch (error: any) {
        console.error("Error fetching base URL:", error);
    }
}

export function* watchBaseUrlAccordingSaga(): Generator {
    yield takeEvery(GET_BASE_URL_ACCORDING, fetchBaseUrlAccordingSaga);
}