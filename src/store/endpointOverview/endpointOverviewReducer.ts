import { GET_ENPOINT_OVERVIEW_REQUEST, 
    GET_ENPOINT_OVERVIEW_SUCCESS, 
    GET_ENPOINT_OVERVIEW_FAILURE, 
    EndpointOverviewPayload 
} from "./endpointOverviewAction";

interface EndpointOverviewState {
  loading: boolean;
    data: EndpointOverviewPayload | null;
    error: string | null;
}

const initialState: EndpointOverviewState = {
    loading: false,
    data: null,
    error: null,
}

const endpointOverviewReducer = (
    state = initialState,
    action: { type: string; payload?: EndpointOverviewPayload; error?: string }
): EndpointOverviewState => {
    switch (action.type) {
        case GET_ENPOINT_OVERVIEW_REQUEST:
            return { ...state, loading: true, error: null };
        case GET_ENPOINT_OVERVIEW_SUCCESS:
            return { ...state, loading: false, data: action.payload || null, error: null };
        case GET_ENPOINT_OVERVIEW_FAILURE:
            return { ...state, loading: false, error: action.error || "Failed to fetch endpoint overview" };
        default:
            return state;
    }
}

export default endpointOverviewReducer;