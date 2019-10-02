import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

const AsyncRoute = ({ component: Component, fallback, ...rest }) => (
  <Suspense fallback={fallback}>
    <Route render={props => <Component {...props} />} {...rest} />
  </Suspense>
);

AsyncRoute.defaultProps = {
  fallback: <div />
};

export default AsyncRoute;
