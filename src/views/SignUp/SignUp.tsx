import React, { useState, useEffect, FC } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Link,
  Typography
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const schema = {
  DisplayName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  UserName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 64
    }
  },
  Password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  },
  ConfirmPassword: {
    equality: "Password"
  }
};

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: '100%'
  },
  grid: {
    height: '100%'
  },
  quoteContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  quote: {
    backgroundColor: theme.palette.grey,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/EURO_2020_login.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px'
  },
  quoteText: {
    color: theme.palette.white,
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white
  },
  bio: {
    color: theme.palette.white
  },
  contentContainer: {},
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(3)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  policy: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  },
  policyCheckbox: {
    marginLeft: '-14px'
  },
  signUpButton: {
    margin: theme.spacing(2, 0)
  }
}));

interface Props {
  history: any;
}
const SignUp: FC<Props> = props => {
  const { history } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = (event: any) => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleBack = () => {
    history.goBack();
  };

  const hasError = (field: any) =>
    (formState.touched as any)[field] && (formState.errors as any)[field] ? true : false;

  return (
    <div className={classes.root}>
      <Grid
        className={classes.grid}
        container
      >
        <Grid
          className={classes.quoteContainer}
          item
          lg={5}
        >
          <div className={classes.quote}>
          </div>
        </Grid>
        <Grid
          className={classes.content}
          item
          lg={7}
          xs={12}
        >
          <div className={classes.content}>
            <div className={classes.contentHeader}>
              <IconButton onClick={handleBack}>
                <ArrowBackIcon />
              </IconButton>
            </div>
            <div className={classes.contentBody}>
              <form
                className={classes.form}
                action='http://www.meizam.club/Account/RegisterV2'
								method='post'
              >
                <Typography
                  className={classes.title}
                  variant="h2"
                >
                  Create new account
                </Typography>
                <Typography
                  color="textSecondary"
                  gutterBottom
                >
                  
                </Typography>
                <TextField
                  className={classes.textField}
                  error={hasError('UserName')}
                  fullWidth
                  helperText={
                    hasError('UserName') ? (formState.errors as any).UserName[0] : null
                  }
                  label="Username"
                  id="UserName"
                  name="UserName"
                  onChange={handleChange}
                  type="text"
                  value={(formState.values as any).UserName || ''}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  error={hasError('Password')}
                  fullWidth
                  helperText={
                    hasError('Password') ? (formState.errors as any).Password[0] : null
                  }
                  label="Password"
                  id="Password"
                  name="Password"
                  onChange={handleChange}
                  type="password"
                  value={(formState.values as any).Password || ''}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  error={hasError('ConfirmPassword')}
                  fullWidth
                  helperText={
                    hasError('ConfirmPassword') ? (formState.errors as any).ConfirmPassword[0] : null
                  }
                  label="Confirm Password"
                  id="ConfirmPassword"
                  name="ConfirmPassword"
                  onChange={handleChange}
                  type="password"
                  value={(formState.values as any).ConfirmPassword || ''}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  error={hasError('DisplayName')}
                  fullWidth
                  helperText={
                    hasError('DisplayName') ? (formState.errors as any).DisplayName[0] : null
                  }
                  label="Display name"
                  id="DisplayName"
                  name="DisplayName"
                  onChange={handleChange}
                  type="text"
                  value={(formState.values as any).DisplayName || ''}
                  variant="outlined"
                />
                <Button
                  className={classes.signUpButton}
                  color="primary"
                  disabled={!formState.isValid}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign up now
                </Button>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Have an account?{' '}
                  <Link
                    component={RouterLink}
                    to="/sign-in"
                    variant="h6"
                  >
                    Sign in
                  </Link>
                </Typography>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
