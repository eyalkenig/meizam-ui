import React, { FC } from 'react';
import {
    Grid,
    Box,
    Theme,
    Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { UserGroupState, UserState } from '../../../../store/user/types';
import { PlainFunction } from '../../../../types/interfaces'
import GroupTable from './GroupTable';

const useStyles = makeStyles((theme: Theme) => ({
	gridContainer: {
		display: 'flex',
    },
    content: {
		flexDirection: 'column',
		boxSizing: 'border-box',
		borderRadius: 10,
		padding: 30,
		backgroundColor: theme.palette.background.paper,
		marginBottom: '5%',
    },
	viewTable: {
		marginTop: 20,
    },
}));

interface Props {
    groups: UserGroupState[],
	user: UserState,
	groupNameClicked: PlainFunction,
	showTableClicked: PlainFunction,
	userNameClicked: PlainFunction,
}

const UserGroupTable: FC<Props> = (props) => {
    const { groups, user, groupNameClicked, showTableClicked, userNameClicked } = { ...props };
    const classes = useStyles();

    return (
        <Grid container className={classes.gridContainer} spacing={2}>
			{groups.map((group: UserGroupState) => (
				<Grid
					item
					key={group.groupId}
					xs={12}
					sm={6}
					lg={4}
					xl={4}
					data-cy='feed-group'
				>
					<Box className={classes.content} display="flex">
						<Box boxShadow={3}>
							<GroupTable
								group={group}
								user={user}	
								groupNameClicked={groupNameClicked}
								showTableClicked={showTableClicked}
								userNameClicked={userNameClicked}
							/>
						</Box>
						<Box textAlign="center">
							<Button 
								className={classes.viewTable} 
								data-cy='show-table-button' 
								variant="contained" 
								color="primary" 
								onClick={() => showTableClicked(group.groupId)}
							>
								VIEW TABLE
							</Button>
						</Box>
					</Box>
				</Grid>
			))}
		</Grid>
    )
}

export default UserGroupTable;