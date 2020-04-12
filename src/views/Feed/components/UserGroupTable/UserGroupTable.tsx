import React, { FC, useState } from 'react';
import {
    Grid,
    Box,
    Theme,
	Button,
	Hidden,
	MobileStepper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SwipeableViews from 'react-swipeable-views';

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
	const [value, setValue] = useState(0);

	interface TableLayoutProps {
		group: UserGroupState;
	}

	function TableLayout(props: TableLayoutProps) {
		const { group } = props;

		return (
			<Box className={classes.content} display="flex" data-cy='feed-group'>
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
		)
	}

	const handleChangeIndex = (index: number) => {
		setValue(index);
	};

    return (
		<div>
			<Hidden mdUp>
				<SwipeableViews
					index={value}
					onChangeIndex={handleChangeIndex}
				>
					{groups.map((group: UserGroupState) => 
						<TableLayout group={group} />
					)}
				</SwipeableViews>
				<MobileStepper
					variant="dots"
					steps={groups.length}
					position="static"
					activeStep={value}
					nextButton={<div />}
					backButton={<div />}
				/>
			</Hidden>
			<Hidden smDown>
				<Grid container className={classes.gridContainer} spacing={2}>
					{groups.map((group: UserGroupState) => (
						<Grid
							item
							key={group.groupId}
							xs={12}
							sm={6}
							lg={4}
							xl={4}
						>
							<TableLayout group={group} />
						</Grid>
					))}
				</Grid>
			</Hidden>
		</div>
    )
}

export default UserGroupTable;
