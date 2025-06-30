export const GET_LIST_ENDPOINT_DETAIL_REQUEST = "GET_LIST_ENDPOINT_DETAIL_REQUEST";
export const GET_LIST_ENDPOINT_DETAIL_SUCCESS = "GET_LIST_ENDPOINT_DETAIL_SUCCESS";
export const GET_LIST_ENDPOINT_DETAIL_FAILURE = "GET_LIST_ENDPOINT_DETAIL_FAILURE";

export interface ListEndpointDetailPayload {
  projectId: number;
  projectName?: string;
  controllers?: [
    {
        controllerName?: string;
      successCount?: number;
      unSuccessCount?: number;
      actions?: [
      {
          actionId?: number;
          actionName?: string;
      }
    ];
    }
  ];
}

export const getListEndpointDetailRequest = (payload: ListEndpointDetailPayload) => ({
  type: GET_LIST_ENDPOINT_DETAIL_REQUEST,
  payload,
});