export const GET_BASE_URL_ACCORDING = "GET_BASE_URL_ACCORDING";
export const GET_BASE_URL_ACCORDING_SUCCESS = "GET_BASE_URL_ACCORDING_SUCCESS";

export interface BaseUrlAccordingPayload {
  projectId: number;
  baseUrl?: string;
}

export const getBaseUrlAccordingRequest = (
  payload: BaseUrlAccordingPayload
) => ({
  type: GET_BASE_URL_ACCORDING,
  payload,
});