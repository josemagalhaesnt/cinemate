import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../../../context/GlobalState';
import { Card, CardActions, CardMedia, makeStyles, Grid, IconButton } from '@material-ui/core';
import { Bookmarks, Favorite, Info } from '@material-ui/icons';
// import { red, blue } from '@material-ui/core/colors';

import defaultMovie from '../../../assets/img/defaultMovie.jpg';

const useStyles = makeStyles({
  card: {
    margin: 16,
    width: 200,
    flexBasis: 300,
  },
  actions: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

const MovieListItem = ({ movie }) => {
  const classes = useStyles();
  const { addMovieToWatchList } = useContext(GlobalContext);
  // const movieTitle = !movie.title ? movie.name || movie.original_title : movie.title;
  const imageUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;

  return (
    <Grid item component={Card} xs={12} md={4} lg={2} className={classes.card}>
      <CardMedia
        component="img"
        alt={`${movie.title} Poster`}
        height={300}
        image={imageUrl}
        title={movie.title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultMovie;
        }}
      />
      <CardActions className={classes.actions}>
        <IconButton aria-label="Add movie to watchlist" onClick={() => addMovieToWatchList(movie)}>
          <Favorite />
        </IconButton>
        <IconButton aria-label="Mark movie watched">
          <Bookmarks />
        </IconButton>
        <IconButton aria-label="See movie info">
          <Info />
        </IconButton>
      </CardActions>
    </Grid>
  );
};

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
  }).isRequired,
};

export default MovieListItem;
