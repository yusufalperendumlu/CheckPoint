export const POST_ADD_REQUEST_INFO_REQUEST = 'POST_ADD_REQUEST_INFO_REQUEST';
export const POST_ADD_REQUEST_INFO_SUCCESS = 'POST_ADD_REQUEST_INFO_SUCCESS';
export const POST_ADD_REQUEST_INFO_FAILURE = 'POST_ADD_REQUEST_INFO_FAILURE';

export interface AddRequestInfoPayload {
    baseUrlId: number;
    controllerId: number;
    controllerPath: string;
    actionPath: string;
    requestType: number;
    query: string;
    header: string;
    body: string;
}

export const postAddRequestInfoRequest = (payload: AddRequestInfoPayload) => ({
    type: POST_ADD_REQUEST_INFO_REQUEST,
    payload,
});
  