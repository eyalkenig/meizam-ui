import React, { FC } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

import { SearchInput } from '../../../../components';
import { PlainFunction } from '../../../../types/interfaces';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));
interface Props {
  className?: string
  searchText: string
	onSearchInputChange: PlainFunction
}
const UsersToolbar: FC<Props> = props => {
  const { className, searchText, onSearchInputChange, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <SearchInput
          searchText={searchText}
          onChange={onSearchInputChange}
          className={classes.searchInput}
          placeholder="Search user"
          data-cy="search-user"
        />
      </div>
    </div>
  );
};

export default UsersToolbar;
