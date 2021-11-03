import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

const AsyncRoute = ({ component: Component, fallback, ...rest }) => (
  <Suspense fallback={fallback}>
    <Component {...rest} />
  </Suspense>
);

AsyncRoute.defaultProps = {
  fallback: <div />
};

export default AsyncRoute;
