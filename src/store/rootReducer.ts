import { combineReducers } from 'redux';
import enterpriseRegisterReducer from '@/store/enterpriseRegister/enterpriseRegisterReducer';
import baseUrlAccordingReducer from '@/store/addEndpoint/baseUrlAccordingReducer';
import addRequestInfoReducer from './addRequestInfo/addRequestInfoReducer';
import endpointOverviewReducer from './endpointOverview/endpointOverviewReducer';
import listEndpointDetailReducer from './listEndpointDetail/listEndpointDetailReducer';

const rootReducer = combineReducers({
  enterpriseRegister: enterpriseRegisterReducer,
  baseUrlAccording: baseUrlAccordingReducer,
  addRequestInfo: addRequestInfoReducer,
  endpointOverview: endpointOverviewReducer,
  listEndpointDetail: listEndpointDetailReducer,
});

export default rootReducer;


export type RootState = ReturnType<typeof rootReducer>;
