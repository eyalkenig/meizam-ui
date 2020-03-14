import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import Routes from './Routes';
import { fetchUserInfo } from './store/user/actions';
import { browserHistory } from './store'
import { useDispatch } from 'react-redux';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App
