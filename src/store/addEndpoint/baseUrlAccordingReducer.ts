import {
    GET_BASE_URL_ACCORDING,
    GET_BASE_URL_ACCORDING_SUCCESS,
} from "./baseUrlAccordingAction";

interface BaseUrlAccordingState {
    loading: boolean;
    error: string | null;
    value: string | null;
}

const initialState: BaseUrlAccordingState = {
    loading: false,
    error: null,
    value: null,
};

const baseUrlAccordingReducer = (
    state = initialState,
    action: { type: string; payload?: { baseUrl: string } }
): BaseUrlAccordingState => {
    switch (action.type) {
        case GET_BASE_URL_ACCORDING:
            return { ...state, loading: true, error: null };
        case GET_BASE_URL_ACCORDING_SUCCESS:
            return { ...state, loading: false, value: action.payload?.baseUrl || null };
        default:
            return state;
    }
};

export default baseUrlAccordingReducer;