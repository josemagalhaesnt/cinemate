/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from '../pages/Search';

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
        <Route component={() => <h1>Página não encontrada!</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

const ROUTES = [
  {
    path: '/',
    key: 'APP_ROOT',
    exact: true,
    component: Search,
  },
];

export default ROUTES;
