import React, { useState, useMemo } from 'react';
import SearchBar from './components/SearchBar';
import moviesAPI from './api/moviesAPI';
import MovieList from './components/MovieList';
import { createMuiTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@material-ui/core';
import Logo from './components/Logo/index';
import { GlobalProvider } from 'context/GlobalState';


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
    const response = await moviesAPI.get('/multi', {
      params: { 
        query: term, 
        api_key: '4ac686527ef22a8789e8c299a8d5f44a',
        page: 1,
        include_adult: false,
        language: 'pt-BR', 
      },
    });

    console.log(response.data);

    setMovies(response.data.results.filter(m => m.media_type === 'movie' || 'tv'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalProvider>
      <div className="App">
        <Logo />
        <SearchBar onSubmit={onSearchSubmit} />
        <MovieList movies={movies} />
      </div>
      </GlobalProvider>
    </ThemeProvider>
  );
}
