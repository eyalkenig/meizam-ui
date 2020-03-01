import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Paper, Input, Theme } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { PlainFunction } from '../../types/interfaces';
import CancelIcon from '@material-ui/icons/Cancel';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: '4px',
    alignItems: 'center',
    padding: theme.spacing(1),
    display: 'flex',
    flexBasis: 420
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  input: {
    flexGrow: 1,
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.05px'
  }
}));

interface Props {
  className: string,
  placeholder: string,
  onChange: PlainFunction,
  style?: any,
  searchText: string
}

const SearchInput: FC<Props> = props => {
  const { className, onChange, style, placeholder, searchText, ...rest } = props;

  const classes = useStyles();

  return (
    <Paper
      {...rest}
      className={clsx(classes.root, className)}
      style={style}
    >
      <SearchIcon className={classes.icon} />
      <Input
        {...rest}
        value={searchText}
        placeholder={placeholder}
        className={classes.input}
        disableUnderline
        onChange={(event) => onChange(event.target.value)}
        data-cy="search-input"
      />
      {
        searchText.length > 0 ? <CancelIcon onClick={() => onChange('')} data-cy="search-clear"/> : null
      }
    </Paper>
  );
};

export default SearchInput;
