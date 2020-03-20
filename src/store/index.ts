import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { rootSaga } from './sagas';
import { userReducer } from './user/reducers';
import { groupReducer } from './groups/reducers';
import { predictionsReducer } from './predictions/reducers';

export const rootReducer = combineReducers({
	user: userReducer,
	groups: groupReducer,
	prediction: predictionsReducer
});

export const browserHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga, browserHistory)

export type RootState = ReturnType<typeof rootReducer>;

