import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './store';
import createSagaMiddleware from 'redux-saga';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import Routes from './Routes';

import { fetchUserInfo } from './store/user/actions';
import { rootSaga } from './store/sagas';

const browserHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga, browserHistory)
export default class App extends Component {
  componentDidMount() {
    store.dispatch(fetchUserInfo())
  }

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}
