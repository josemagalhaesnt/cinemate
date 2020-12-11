/* eslint-disable camelcase */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Grid,
  IconButton,
} from '@material-ui/core';
import { Bookmarks, Favorite, Info } from '@material-ui/icons';
import { GlobalContext } from '../../../context/GlobalState';
// import { red, blue } from '@material-ui/core/colors';

import defaultMovie from '../../../assets/img/defaultMovie.jpg';

const useStyles = makeStyles({
  card: {
    margin: 16,
    width: 200,
    flexBasis: 300,
  },
  content: {
    padding: 0,
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
  const imageUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;

  /* const formatTitle = () => {
    const { name, title, original_title, release_date } = movie;

    // !movie.title ? movie.name || movie.original_title : movie.title;
    if (title && release_date) {
      return `${title} (${release_date.substring(0, 4)})`;
    }
    if (!title || !release_date) {
      return `${name || original_title}`;
    }
    return 'Untitled';
  }; */

  return (
    <Grid item component={Card} xs={8} md={4} lg={2} className={classes.card}>
      <CardMedia
        component="img"
        height={275}
        alt={`${movie.title} Poster`}
        image={imageUrl}
        title={movie.title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultMovie;
        }}
      />
      <CardContent className={classes.content}>
        <CardActions className={classes.actions}>
          <IconButton
            aria-label="Add movie to watchlist"
            onClick={() => addMovieToWatchList(movie)}
          >
            <Favorite />
          </IconButton>
          <IconButton aria-label="Mark movie watched">
            <Bookmarks />
          </IconButton>
          <IconButton aria-label="See movie info">
            <Info />
          </IconButton>
        </CardActions>
      </CardContent>
    </Grid>
  );
};

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    original_title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
  }).isRequired,
};

export default MovieListItem;
