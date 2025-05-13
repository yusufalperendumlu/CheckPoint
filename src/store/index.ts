import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './demo/demoReducer';
import cocktailSaga from './demo/demoSaga';

const INITIAL_STATE = {
  drinks: {
    loading: false,
    data: []
  }
};

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(cocktailSaga);

export default store;
