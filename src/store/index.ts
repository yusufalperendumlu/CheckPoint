// store/store.ts
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import enterpriseRegisterSaga from '@/store/enterpriseRegister/enterpriseRegisterSaga';
import { watchBaseUrlAccordingSaga } from '@/store/addEndpoint/baseUrlAccordingSaga';
import  watchAddRequestInfoSaga  from '@/store/addRequestInfo/addRequestInfoSaga';
import { endpointOverviewSaga } from '@/store/endpointOverview/endpointOverviewSaga';
import { listEndpointDetailSaga } from '@/store/listEndpointDetail/listEndpointDetailSaga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(enterpriseRegisterSaga);
sagaMiddleware.run(watchBaseUrlAccordingSaga);
sagaMiddleware.run(watchAddRequestInfoSaga);
sagaMiddleware.run(endpointOverviewSaga);
sagaMiddleware.run(listEndpointDetailSaga);

export default store;
