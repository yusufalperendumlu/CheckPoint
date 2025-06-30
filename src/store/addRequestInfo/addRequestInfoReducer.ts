import {
    POST_ADD_REQUEST_INFO_REQUEST,
    POST_ADD_REQUEST_INFO_SUCCESS,
    POST_ADD_REQUEST_INFO_FAILURE,
    AddRequestInfoPayload,
} from "./addRequestInfoAction";

interface AddRequestInfoState {
    loading: boolean;
    error: string | null;
    data: AddRequestInfoPayload | null;
}

const initialState: AddRequestInfoState = {
    loading: false,
    error: null,
    data: null,
}

const addRequestInfoReducer = (state = initialState, action: any): AddRequestInfoState => {
    switch (action.type) {
        case POST_ADD_REQUEST_INFO_REQUEST:
            return { ...state, loading: true, error: null };
        case POST_ADD_REQUEST_INFO_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case POST_ADD_REQUEST_INFO_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default addRequestInfoReducer;
