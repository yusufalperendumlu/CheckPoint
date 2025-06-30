import {
  POST_ENTERPRISE_REGISTER_REQUEST,
  POST_ENTERPRISE_REGISTER_SUCCESS,
  POST_ENTERPRISE_REGISTER_FAILURE,
  RegisterPayload,
} from './enterpriseRegisterAction';

interface EnterpriseRegisterState {
  loading: boolean;
  error: string | null;
  data: RegisterPayload | null;
}

const initialState: EnterpriseRegisterState = {
  loading: false,
  error: null,
  data: null,
};

const enterpriseRegisterReducer = (state = initialState, action: any): EnterpriseRegisterState => {
  switch (action.type) {
    case POST_ENTERPRISE_REGISTER_REQUEST:
      return { ...state, loading: true, error: null };
    case POST_ENTERPRISE_REGISTER_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case POST_ENTERPRISE_REGISTER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default enterpriseRegisterReducer;
