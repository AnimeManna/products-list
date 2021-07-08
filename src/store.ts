  
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducers } from './rootReducer';
import { rootSaga } from './rootSaga';


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducers,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);