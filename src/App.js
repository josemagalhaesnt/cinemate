import React, { useMemo } from 'react';
import {
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from '@material-ui/core';
import { GlobalProvider } from './context/GlobalState';
import ROUTES, { RenderRoutes } from './routes';

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalProvider>
        <div className="App">
          <RenderRoutes routes={ROUTES} />
        </div>
      </GlobalProvider>
    </ThemeProvider>
  );
}
