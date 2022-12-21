import { applyMiddleware, combineReducers, createStore,compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import {dataReducer,cityReducer} from './reducers';
import rootSaga from './rootSaga';
const sagaMiddleware = createSagaMiddleware();
const rootReducer=combineReducers({dataReducer,cityReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store=createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)
export default store