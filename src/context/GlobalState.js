import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  watchlist: [],
  watched: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider components
// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const addMovieToWatchList = (movie) => {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{ watchlist: state.watchlist, watched: state.watched, addMovieToWatchList }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
