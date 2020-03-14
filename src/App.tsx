import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import Routes from './Routes';
import { fetchUserInfo } from './store/user/actions';
import { store, browserHistory } from './store'


export default class App extends Component {
  componentDidMount() {
    store.dispatch(fetchUserInfo())
  }

  render() {
    return (
        <ThemeProvider theme={theme}>
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </ThemeProvider>
    );
  }
}
