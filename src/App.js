import React, { useState, useMemo } from 'react';
import SearchBar from './components/SearchBar';
import moviesAPI from './api/moviesAPI';
import MovieList from './components/MovieList';
import { createMuiTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@material-ui/core';
import Logo from './components/Logo/index';


export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  const [movies, setMovies] = useState([]);

  const onSearchSubmit = async (term) => {
    const response = await moviesAPI.get('', {
      params: { s: term, type: 'movie' || 'series' },
    });

    console.log(response.data);

    setMovies(response.data.Search);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Logo />
        <SearchBar onSubmit={onSearchSubmit} />
        <MovieList movies={movies} />
      </div>
    </ThemeProvider>
  );
}
