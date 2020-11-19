import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography, makeStyles, Grid, CardActionArea } from '@material-ui/core';

import defaultMovie from '../../../assets/img/defaultMovie.jpg';

const useStyles = makeStyles({
  card: {
    margin: 16,
  },
});

const MovieListItem = ({ title, posterURL }) => {
  const classes = useStyles();
  return (
    <Grid item component={Card} xs={12} md={4} lg={2} className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="300"
          image={posterURL}
          title={title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultMovie;
          }}
        />

        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Grid>
  );
};

MovieListItem.propTypes = {
  title: PropTypes.string.isRequired,
  sinopsis: PropTypes.string,
  posterURL: PropTypes.string.isRequired,
};

MovieListItem.defaultProps = {
  sinopsis: undefined,
};

export default MovieListItem;
