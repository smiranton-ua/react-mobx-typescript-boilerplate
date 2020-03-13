import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import isArray from 'lodash/isArray';
import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';

import { RouteInterface } from 'src/types/routes';

const PrivateRoute: React.FC<RouteInterface> = ({
  component: Component,
  // isPrivate,
  redirect,
  routes,
  ...rest
}) => {
  if (!Component) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        // if user unauthorized
        // if (isPrivate) {
        //   return <Redirect to={PATH.AUTH} />;
        // }

        return (
          <Component {...props}>
            {isArray(routes) && !isEmpty(routes) && (
              <Switch>
                {routes.map((nested: RouteInterface, index: number) => nested.component && (
                  <Route
                    key={String(index)}
                    path={nested.path}
                    exact={nested.exact}
                    component={nested.component}
                  />
                ))}
                {!isNil(redirect) && <Redirect {...redirect} />}
              </Switch>
            )}
          </Component>
        );
      }}
    />
  );
};

export default PrivateRoute;
