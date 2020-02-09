import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import Routes from './Routes';
import axios from 'axios';

const browserHistory = createBrowserHistory();

export default class App extends Component {
  componentDidMount() {
    const baseUrl = process.env.REACT_APP_MEIZAM_API_BASE_HOST;
    if (baseUrl && baseUrl.indexOf('localhost') >= 0) {
      console.log('running on localhost')
    } else {
      axios.defaults.withCredentials = true;
    }
    axios.post(`${baseUrl}/Group/LoadUserPrediction`, { p_id: 3517 }).then((response: any) => {
      console.log('succeeded:')
      console.log(response)
    })
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
