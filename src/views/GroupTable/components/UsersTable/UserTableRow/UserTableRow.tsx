import React, { FC } from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';
import { TableRow as ITableRow } from '../../../../../store/groups/types';
import { PlainFunction } from '../../../../../types/interfaces';
import getInitials from '../../../../../services/utils/getInitials';
import clsx from 'clsx';
import { 
    TableRow,
    TableCell ,
    Badge,
    Avatar,
    Typography,
    Theme,
    Box
} from '@material-ui/core';

const SmallAvatar = withStyles((theme: Theme) => ({
	root: {
	  width: 17,
	  height: 17,
	  border: `2px solid ${theme.palette.background.paper}`,
	},
  }))(Avatar);

const useStyles = makeStyles((theme: Theme) => ({
	nameContainer: {
		display: 'flex',
		alignItems: 'center'
    },
    row: {
        cursor: 'pointer',
        backgroundColor: 'transparent',
    },
    badge: {
		marginRight: 16
    },
    highlightBottom: {
        borderBottom: `2px solid black`,
    }, 
    highlightRow: {
        backgroundColor: theme.palette.success.light,
    }
}));

interface Props {
    user: ITableRow;
    onUserClicked: PlainFunction;
    highlightBottom?: boolean;
    highlightRow?: boolean;
};

const UserTableRow: FC<Props> = props => {
    const { user, onUserClicked, highlightBottom, highlightRow  } = { ...props };
    const classes = useStyles();
    const rowStyle = [classes.row];

    if (highlightBottom) {
        rowStyle.push(classes.highlightBottom) 
    }
    if (highlightRow) {
        rowStyle.push(classes.highlightRow) 
    }
    
    return (
        <TableRow hover key={user.id} data-cy='table-row' className={clsx(rowStyle)} >
            <TableCell>{user.position}</TableCell>
            <TableCell>
                <Box className={classes.nameContainer}>
                    <Badge
                        className={classes.badge}
                        overlap="circle"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        badgeContent={<SmallAvatar src={user.winningTeamLogoUrl} data-cy='winner-flag' />}
                    >
                    <Avatar
                        src={user.profilePictureUrl}
                        onClick={() => onUserClicked(user.predictionId)}
                        data-cy='user-profile-picture'
                    >
                        {getInitials(user.name)}
                    </Avatar>
                </Badge>
                <Typography variant='body1' onClick={() => onUserClicked(user.predictionId)}>{user.name}</Typography>
            </Box>
        </TableCell>
        <TableCell>{user.points}</TableCell>
    </TableRow>
    )
};

export default UserTableRow;