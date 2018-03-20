import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Example from './Example';
import ExampleList from './ExampleList';
import SimpleLine from './SimpleLine';
import InvertedChart from './InvertedChart';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ExampleList} />
      <Route path="/:page">
        <Example>
          <Switch>
            <Route path="/SimpleLine" component={SimpleLine} />
            <Route path="/InvertedChart" component={InvertedChart} />
          </Switch>
        </Example>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;