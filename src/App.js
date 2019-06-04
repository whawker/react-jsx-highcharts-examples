import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Example from './Example';
import ExampleList from './ExampleList';
import SimpleLine from './SimpleLine';
import InvertedChart from './InvertedChart';
import SplineWithPlotBands from './SplineWithPlotBands';
import Combo from './Combo';
import Funnel from './Funnel';
import AddSeries from './AddSeries';
import Events from './Events';
import LiveUpdate from './LiveUpdate';
import ImmutableJS from './ImmutableJS';
import SynchronisedCharts from './SynchronisedCharts';
import Reflow from './Reflow';
import Loading from './Loading';
import Treemap from './Treemap';
import TreemapDrilldown from './TreemapDrilldown';
import StyleByCSS from './StyleByCSS';
import Sparkline from './Sparkline';
import ThreeDChart from './3DChart';
import Sankey from './Sankey';
import DependencyWheel from './DependencyWheel';
import StreamGraph from './StreamGraph';
import Highstocks from './Highstocks';
import HighstockPlotBands from './HighstockPlotBands';
import CustomComponent from './CustomComponent';
import Responsive from './Responsive';
import Gauge from './Gauge';
import Polar from './Polar';
import Map from './Map';
import MapBubble from './MapBubble';

import 'whatwg-fetch';

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={ExampleList} />
        <Route path="/:page">
          <Example>
            <Switch>
              <Route path="/SimpleLine" component={SimpleLine} />
              <Route path="/InvertedChart" component={InvertedChart} />
              <Route path="/SplineWithPlotBands" component={SplineWithPlotBands} />
              <Route path="/Combo" component={Combo} />
              <Route path="/Funnel" component={Funnel} />
              <Route path="/AddSeries" component={AddSeries} />
              <Route path="/Events" component={Events} />
              <Route path="/LiveUpdate" component={LiveUpdate} />
              <Route path="/ImmutableJS" component={ImmutableJS} />
              <Route path="/SynchronisedCharts" component={SynchronisedCharts} />
              <Route path="/Reflow" component={Reflow} />
              <Route path="/Loading" component={Loading} />
              <Route path="/Treemap" component={Treemap} />
              <Route path="/TreemapDrilldown" component={TreemapDrilldown} />
              <Route path="/StyleByCSS" component={StyleByCSS} />
              <Route path="/Sparkline" component={Sparkline} />
              <Route path="/3DChart" component={ThreeDChart} />
              <Route path="/Sankey" component={Sankey} />
              <Route path="/DependencyWheel" component={DependencyWheel} />
              <Route path="/StreamGraph" component={StreamGraph} />
              <Route path="/Highstocks" component={Highstocks} />
              <Route path="/HighstockPlotBands" component={HighstockPlotBands} />
              <Route path="/CustomComponent" component={CustomComponent} />
              <Route path="/Responsive" component={Responsive} />
              <Route path="/Gauge" component={Gauge} />
              <Route path="/Polar" component={Polar} />
              <Route path="/Map" component={Map} />
              <Route path="/MapBubble" component={MapBubble} />
            </Switch>
          </Example>
        </Route>
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
);

export default App;