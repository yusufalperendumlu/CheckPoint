import { GET_LIST_ENDPOINT_DETAIL_REQUEST, GET_LIST_ENDPOINT_DETAIL_SUCCESS, GET_LIST_ENDPOINT_DETAIL_FAILURE, ListEndpointDetailPayload } from "./listEndpointDetailAction";

interface ListEndpointDetailState {
  loading: boolean;
    data: ListEndpointDetailPayload | null;
    error: string | null;
}

const initialState: ListEndpointDetailState = {
    loading: false,
    data: null,
    error: null,
}

const listEndpointDetailReducer = (
    state = initialState,
    action: { type: string; payload?: ListEndpointDetailPayload; error?: string }
): ListEndpointDetailState => {
    switch (action.type) {
        case GET_LIST_ENDPOINT_DETAIL_REQUEST:
            return { ...state, loading: true, error: null };
        case GET_LIST_ENDPOINT_DETAIL_SUCCESS:
            return { ...state, loading: false, data: action.payload || null, error: null };
        case GET_LIST_ENDPOINT_DETAIL_FAILURE:
            return { ...state, loading: false, error: action.error || "Failed to fetch endpoint details" };
        default:
            return state;
    }
}

export default listEndpointDetailReducer;