import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Example from './Example';
import ExampleList from './ExampleList';
import AsyncRoute from './AsyncRoute';

const SimpleLine = lazy(() => import('./SimpleLine'));
const InvertedChart = lazy(() => import('./InvertedChart'));
const SplineWithPlotBands = lazy(() => import('./SplineWithPlotBands'));
const Combo = lazy(() => import('./Combo'));
const Funnel = lazy(() => import('./Funnel'));
const AddSeries = lazy(() => import('./AddSeries'));
const Events = lazy(() => import('./Events'));
const LiveUpdate = lazy(() => import('./LiveUpdate'));
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
      <Routes>
        <Route path="/" element={<ExampleList />} />
        <Route path="/*" element={<Example />}>
          <Route
            path="SimpleLine"
            element={<AsyncRoute component={SimpleLine} />}
          />
          <Route
            path="InvertedChart"
            element={<AsyncRoute component={InvertedChart} />}
          />
          <Route
            path="SplineWithPlotBands"
            element={<AsyncRoute component={SplineWithPlotBands} />}
          />
          <Route path="Combo" element={<AsyncRoute component={Combo} />} />
          <Route path="Funnel" element={<AsyncRoute component={Funnel} />} />
          <Route
            path="AddSeries"
            element={<AsyncRoute component={AddSeries} />}
          />
          <Route path="Events" element={<AsyncRoute component={Events} />} />
          <Route
            path="LiveUpdate"
            element={<AsyncRoute component={LiveUpdate} />}
          />
          <Route
            path="SynchronisedCharts"
            element={<AsyncRoute component={SynchronisedCharts} />}
          />
          <Route path="Reflow" element={<AsyncRoute component={Reflow} />} />
          <Route path="Loading" element={<AsyncRoute component={Loading} />} />
          <Route path="Treemap" element={<AsyncRoute component={Treemap} />} />
          <Route
            path="TreemapDrilldown"
            element={<AsyncRoute component={TreemapDrilldown} />}
          />
          <Route
            path="StyleByCSS"
            element={<AsyncRoute component={StyleByCSS} />}
          />
          <Route
            path="Sparkline"
            element={<AsyncRoute component={Sparkline} />}
          />
          <Route
            path="3DChart"
            element={<AsyncRoute component={ThreeDChart} />}
          />
          <Route path="Sankey" element={<AsyncRoute component={Sankey} />} />
          <Route
            path="DependencyWheel"
            element={<AsyncRoute component={DependencyWheel} />}
          />
          <Route
            path="StreamGraph"
            element={<AsyncRoute component={StreamGraph} />}
          />
          <Route
            path="Highstocks"
            element={<AsyncRoute component={Highstocks} />}
          />
          <Route
            path="HighstockPlotBands"
            element={<AsyncRoute component={HighstockPlotBands} />}
          />
          <Route
            path="CustomComponent"
            element={<AsyncRoute component={CustomComponent} />}
          />
          <Route
            path="Responsive"
            element={<AsyncRoute component={Responsive} />}
          />
          <Route path="Gauge" element={<AsyncRoute component={Gauge} />} />
          <Route path="Polar" element={<AsyncRoute component={Polar} />} />
          <Route path="Map" element={<AsyncRoute component={Map} />} />
          <Route
            path="MapBubble"
            element={<AsyncRoute component={MapBubble} />}
          />
        </Route>
      </Routes>
    </ScrollToTop>
  </BrowserRouter>
);

export default App;
