import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Theme
} from '@material-ui/core';
import UserTableRow from '../../../../GroupTable/components/UsersTable/UserTableRow';
import { TableRow as ITableRow } from '../../../../../store/groups/types';
import { UserGroupState, UserState } from '../../../../../store/user/types';
import { PlainFunction } from '../../../../../types/interfaces'
import getOrdinalPosition from '../../../../../services/utils/getOrdinalPosition';

const useStyles = makeStyles((theme: Theme) => ({
    header: {
		backgroundColor: theme.palette.secondary.dark,
	},
    table: {
		backgroundColor: theme.palette.background.paper,
    },
    headerCell: {
		borderBottom: 'none',
		fontSize: theme.typography.subtitle2.fontSize,
		color: theme.palette.primary.contrastText,
    },
    ordinalEnding: {
		fontSize: 10,
    },
    groupName: {
		fontWeight: theme.typography.h1.fontWeight,
		color: theme.palette.primary.contrastText,
		fontSize: theme.typography.subtitle1.fontSize,
		borderBottom: 'none',
		cursor: 'pointer',
	},
}));

interface Props {
    group: UserGroupState;
    user: UserState;
    groupNameClicked: PlainFunction;
	showTableClicked: PlainFunction;
	userNameClicked: PlainFunction;
}

const GroupTable: FC<Props> = (props) => {
    const classes = useStyles();
    const { group, user, userNameClicked, groupNameClicked } = { ...props }; 
    
    const getFirstPlace = (group: UserGroupState) => {
        return (
            group.firstPlace && group.position > 2 ?
            <UserTableRow 
                user={group.firstPlace} 
                onUserClicked={(predictionId) => {userNameClicked(predictionId)}} 
                highlightBottom={group.position > 3}
            />
            :
            null
        )
    }

    return (
        <Table className={classes.table}>
            <TableHead className={classes.header}>
                <TableRow>
                    <TableCell className={classes.headerCell}>
                        {group.position}
                        <span className={classes.ordinalEnding}>{getOrdinalPosition(group.position)}</span>
                        {`/${group.totalMembers}`}
                    </TableCell>
                    <TableCell className={classes.groupName} onClick={() => groupNameClicked(group.groupId)}>{group.displayName}</TableCell>
                    <TableCell className={classes.headerCell}>{group.points}</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                { getFirstPlace(group) }
                {
                    group.surroundings ?
                    group.surroundings.map((surrounding: ITableRow) => (
                        <UserTableRow 
                            user={surrounding} 
                            onUserClicked={(predictionId) => {userNameClicked(predictionId)}} 
                            highlightRow={surrounding.id === user.id} 
                        />
                    ))
                    :
                    null
                }
            </TableBody>
        </Table>
    )
};

export default GroupTable;