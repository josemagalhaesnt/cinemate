import React, { useState } from 'react';
import moviesAPI from '../../api/moviesAPI';
import Logo from '../../components/Logo';
import SearchBar from '../../components/SearchBar';
import MovieList from '../../components/MovieList';

export default function Search() {
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
    setMovies(response.data.results.filter((m) => m.media_type === 'movie' || 'tv'));
  };

  return (
    <div className="Search">
      <Logo />
      <SearchBar onSubmit={onSearchSubmit} />

      {movies && <MovieList movies={movies} />}
    </div>
  );
}
