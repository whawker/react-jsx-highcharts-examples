import React, { lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Example from './Example';
import ExampleList from './ExampleList';
import AsyncRoute from './AsyncRoute';
import 'whatwg-fetch';

const SimpleLine = lazy(() => import('./SimpleLine'));
const InvertedChart = lazy(() => import('./InvertedChart'));
const SplineWithPlotBands = lazy(() => import('./SplineWithPlotBands'));
const Combo = lazy(() => import('./Combo'));
const Funnel = lazy(() => import('./Funnel'));
const AddSeries = lazy(() => import('./AddSeries'));
const Events = lazy(() => import('./Events'));
const LiveUpdate = lazy(() => import('./LiveUpdate'));
const ImmutableJS = lazy(() => import('./ImmutableJS'));
const SynchronisedCharts = lazy(() => import('./SynchronisedCharts'));
const Reflow = lazy(() => import('./Reflow'));
const Loading = lazy(() => import('./Loading'));
const Treemap = lazy(() => import('./Treemap'));
const TreemapDrilldown = lazy(() => import('./TreemapDrilldown'));
const StyleByCSS = lazy(() => import('./StyleByCSS'));
const Sparkline = lazy(() => import('./Sparkline'));
const ThreeDChart = lazy(() => import('./3DChart'));
const Sankey = lazy(() => import('./Sankey'));
const DependencyWheel = lazy(() => import('./DependencyWheel'));
const StreamGraph = lazy(() => import('./StreamGraph'));
const Highstocks = lazy(() => import('./Highstocks'));
const HighstockPlotBands = lazy(() => import('./HighstockPlotBands'));
const CustomComponent = lazy(() => import('./CustomComponent'));
const Responsive = lazy(() => import('./Responsive'));
const Gauge = lazy(() => import('./Gauge'));
const Polar = lazy(() => import('./Polar'));
const Map = lazy(() => import('./Map'));
const MapBubble = lazy(() => import('./MapBubble'));

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={ExampleList} />
        <Route path="/:page">
          <Example>
            <Switch>
              <AsyncRoute path="/SimpleLine" component={SimpleLine} />
              <AsyncRoute path="/InvertedChart" component={InvertedChart} />
              <AsyncRoute path="/SplineWithPlotBands" component={SplineWithPlotBands} />
              <AsyncRoute path="/Combo" component={Combo} />
              <AsyncRoute path="/Funnel" component={Funnel} />
              <AsyncRoute path="/AddSeries" component={AddSeries} />
              <AsyncRoute path="/Events" component={Events} />
              <AsyncRoute path="/LiveUpdate" component={LiveUpdate} />
              <AsyncRoute path="/ImmutableJS" component={ImmutableJS} />
              <AsyncRoute path="/SynchronisedCharts" component={SynchronisedCharts} />
              <AsyncRoute path="/Reflow" component={Reflow} />
              <AsyncRoute path="/Loading" component={Loading} />
              <AsyncRoute path="/Treemap" component={Treemap} />
              <AsyncRoute path="/TreemapDrilldown" component={TreemapDrilldown} />
              <AsyncRoute path="/StyleByCSS" component={StyleByCSS} />
              <AsyncRoute path="/Sparkline" component={Sparkline} />
              <AsyncRoute path="/3DChart" component={ThreeDChart} />
              <AsyncRoute path="/Sankey" component={Sankey} />
              <AsyncRoute path="/DependencyWheel" component={DependencyWheel} />
              <AsyncRoute path="/StreamGraph" component={StreamGraph} />
              <AsyncRoute path="/Highstocks" component={Highstocks} />
              <AsyncRoute path="/HighstockPlotBands" component={HighstockPlotBands} />
              <AsyncRoute path="/CustomComponent" component={CustomComponent} />
              <AsyncRoute path="/Responsive" component={Responsive} />
              <AsyncRoute path="/Gauge" component={Gauge} />
              <AsyncRoute path="/Polar" component={Polar} />
              <AsyncRoute path="/Map" component={Map} />
              <AsyncRoute path="/MapBubble" component={MapBubble} />
            </Switch>
          </Example>
        </Route>
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
);

export default App;
