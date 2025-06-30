export const GET_ENPOINT_OVERVIEW_REQUEST = "GET_ENPOINT_OVERVIEW_REQUEST";
export const GET_ENPOINT_OVERVIEW_SUCCESS = "GET_ENPOINT_OVERVIEW_SUCCESS";
export const GET_ENPOINT_OVERVIEW_FAILURE = "GET_ENPOINT_OVERVIEW_FAILURE";

export interface EndpointOverviewPayload {
    projectId: number;
    active?: number;
    pasive?: number;
    endpointCount?: number;
}

export const getEndpointOverviewRequest = (payload: EndpointOverviewPayload) => ({
  type: GET_ENPOINT_OVERVIEW_REQUEST,
  payload,
});