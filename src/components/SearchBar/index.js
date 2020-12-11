import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { IconButton, InputBase, makeStyles, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import debounce from 'lodash';

import './styles.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 800,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SearchBar = ({ onSubmit }) => {
  // const [buttonDisabled, setButtonDisabled] = useState(true);
  const classes = useStyles();
  const [query, setQuery] = useState('');

  const onSearchValueChange = (term) => debounce(setQuery(term), 500);

  const onSearchSubmit = (event) => {
    event.preventDefault();

    onSubmit(query);
  };

  return (
    <div className="SearchBar">
      <Paper
        component="form"
        className={classes.root}
        theme="dark"
        onSubmit={(e) => onSearchSubmit(e)}
      >
        <InputBase
          className={classes.input}
          placeholder="Search Movies and Series"
          inputProps={{ 'aria-label': 'Search Movies and Series' }}
          onChange={(e) => onSearchValueChange(e.target.value)}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
