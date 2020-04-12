import React, { FC } from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

interface Props {
    errorMessage: string;
    showTryAgain: boolean;
    onTryAgain?: () => void;
}

const useStyles = makeStyles({ 
    tryAgain: {
        marginTop: 25
    }
});

const ErrorMessage: FC<Props> = props => {
    const classes = useStyles();

    return (
        <Box textAlign="center">
            <Typography data-cy='error-message'>{props.errorMessage}</Typography>
            {
                props.showTryAgain && <Button 
                                            className={classes.tryAgain} 
                                            variant="outlined" 
                                            color="secondary"
                                            onClick={props.onTryAgain}
                                        >
                                            Try Again
                                        </Button> 
            }
        </Box>
    )
};

export default ErrorMessage;

