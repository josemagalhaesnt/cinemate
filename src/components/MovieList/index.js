import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import MovieListItem from './MovieListItem';
import { isEmpty } from 'lodash';
import { Grid } from '@material-ui/core';

const MovieList = ({ movies }) => {
  return (
    <div className="MovieList">
      <Grid container direction="row" justify="center">
        {!isEmpty(movies) &&
          movies.map((m) => {
            return <MovieListItem key={m.imdbID} title={m.Title} posterURL={m.Poster} />;
          })}
      </Grid>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({})),
};

MovieList.defaultProps = {
  movies: undefined,
};

export default MovieList;
