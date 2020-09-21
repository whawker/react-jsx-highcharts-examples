import React from 'react';
import { Link } from 'react-router-dom';
import './ExampleList.scss';

const ExampleList = () => (
  <div>
    <img src="https://user-images.githubusercontent.com/2003804/40681848-2d0f5ce2-6382-11e8-8ce9-cd49c409ad2e.png" alt="React JSX Highcharts" />
    <h1><span className="sr-only">React JSX Highcharts</span> Examples</h1>

    <div className="grid">
      <div className="col">
        <Link to="SimpleLine">
          <img src="https://user-images.githubusercontent.com/2003804/28792320-154dad82-7627-11e7-8457-6f5ef0519ede.png" alt="SimpleLine" />
          <h4>Simple line chart</h4>
        </Link>
        <p></p>
      </div>
      <div className="col">
        <Link to="InvertedChart">
          <img src="https://user-images.githubusercontent.com/2003804/28792317-1536e9ee-7627-11e7-91d4-b1c5896a271e.png" alt="InvertedChart" />
          <h4>Inverted chart</h4>
        </Link>
        <p></p>
      </div>
      <div className="col">
        <Link to="SplineWithPlotBands">
          <img src="https://user-images.githubusercontent.com/2003804/28792321-154e19d4-7627-11e7-823c-f20540e30d81.png" alt="SplineWithPlotBands" />
          <h4>Spline with Plot Bands</h4>
        </Link>
        <p></p>
      </div>
      <div className="col">
        <Link to="Combo">
          <img src="https://user-images.githubusercontent.com/2003804/28792313-152e0acc-7627-11e7-895b-8bfb9b818bce.png" alt="Combo" />
          <h4>Combined series types</h4>
        </Link>
        <p>(Requires <code>highcharts-more</code> module)</p>
      </div>
      <div className="col">
        <Link to="Funnel">
          <img src="https://user-images.githubusercontent.com/2003804/28792314-1534eae0-7627-11e7-93c9-eaae2b1c96b2.png" alt="Funnel" />
          <h4>Funnel chart</h4>
        </Link>
        <p>(Requires <code>funnel</code> module)</p>
      </div>
      <div className="col">
        <Link to="AddSeries">
          <img src="https://user-images.githubusercontent.com/2003804/28792312-15186cc6-7627-11e7-9602-1bb4f628e6e9.gif" alt="AddSeries" />
          <h4>Add / Remove series</h4>
        </Link>
        <p></p>
      </div>
      <div className="col">
        <Link to="Events">
          <img src="https://user-images.githubusercontent.com/2003804/28792316-1536c888-7627-11e7-915d-6177b1ce248e.gif" alt="Events" />
          <h4>Event handling</h4>
        </Link>
        <p></p>
      </div>
      <div className="col">
        <Link to="LiveUpdate">
          <img src="https://user-images.githubusercontent.com/2003804/28792319-1547c11a-7627-11e7-962a-4d99721fdd43.gif" alt="LiveUpdate" />
          <h4>Dynamically updating data</h4>
        </Link>
        <p></p>
      </div>
      <div className="col">
        <Link to="SynchronisedCharts">
          <img src="https://user-images.githubusercontent.com/2003804/28792322-154e48e6-7627-11e7-9608-ef813b12b73a.gif" alt="SynchronisedCharts" />
          <h4>Synchronised charts</h4>
        </Link>
        <p></p>
      </div>
      <div className="col">
        <Link to="Reflow">
          <img src="https://user-images.githubusercontent.com/2003804/33528827-63a62672-d85f-11e7-885a-081e214ae652.gif" alt="Reflow" />
          <h4>Reflow (Resizing)</h4>
        </Link>
        <p></p>
      </div>
      <div className="col">
        <Link to="Loading">
          <img src="https://user-images.githubusercontent.com/2003804/33528826-63919e96-d85f-11e7-9eab-06e903ba1aa6.png" alt="Loading" />
          <h4>Async loading message</h4>
        </Link>
        <p></p>
      </div>
      <div className="col">
        <Link to="Responsive">
          <img src="https://user-images.githubusercontent.com/2003804/40889762-539d6bde-6764-11e8-9365-0fd5c8c8de7c.png" alt="Responsive" />
          <h4>Responsive</h4>
        </Link>
        <p>(Using <a href="https://www.npmjs.com/package/react-responsive" target="_blank" rel="noopener noreferrer"><code>react-responsive</code></a>)</p>
      </div>
      <div className="col">
        <Link to="Treemap">
          <img src="https://user-images.githubusercontent.com/2003804/29355276-4c583c32-8268-11e7-81a3-2c4edc01e122.png" alt="Treemap" />
          <h4>Treemap chart</h4>
        </Link>
        <p>(Requires <code>treemap</code> and <code>heatmap</code> module)</p>
      </div>
      <div className="col">
        <Link to="TreemapDrilldown">
          <img src="https://user-images.githubusercontent.com/2003804/29355277-4c5db0a4-8268-11e7-8959-816265636699.png" alt="TreemapDrilldown" />
          <h4>Treemap Drilldown chart</h4>
        </Link>
        <p>(Requires <code>treemap</code> and <code>heatmap</code> module)</p>
      </div>
      <div className="col">
        <Link to="StyleByCSS">
          <img src="https://user-images.githubusercontent.com/2003804/31632558-4bb0eb12-b2b5-11e7-896e-b62698983402.png" alt="StyleByCSS" />
          <h4>Style By CSS</h4>
        </Link>
        <p></p>
      </div>
      <div className="col">
        <Link to="Sparkline">
          <img src="https://user-images.githubusercontent.com/2003804/28792323-155773ee-7627-11e7-8f46-9a1c34e026c3.png" alt="Sparkline" />
          <h4>Sparkline charts</h4>
        </Link>
        <p></p>
      </div>
      <div className="col">
        <Link to="3DChart">
          <img src="https://user-images.githubusercontent.com/2003804/29355275-4c5724dc-8268-11e7-8b0d-a88fa0ef0ea7.png" alt="3DChart" />
          <h4>3D Chart</h4>
        </Link>
        <p>(Requires <code>highcharts-3d</code> extension)</p>
      </div>
      <div className="col">
        <Link to="Sankey">
          <img src="https://user-images.githubusercontent.com/2003804/35200550-94db3456-ff08-11e7-904e-e2e3c4f25d7f.png" alt="Sankey" />
          <h4>Sankey chart</h4>
        </Link>
        <p>(Requires <code>highcharts 6+</code> & <code>sankey</code> extension)</p>
      </div>
      <div className="col">
        <Link to="DependencyWheel">
          <img src="https://user-images.githubusercontent.com/2003804/58860126-57107b80-86a3-11e9-8bb2-20d4934ebd8c.png" alt="DependencyWheel" />
          <h4>Dependency Wheel chart</h4>
        </Link>
        <p>(Requires <code>highcharts 7.1+</code>, <code>sankey</code> & <code>dependency wheel</code> extensions)</p>
      </div>
      <div className="col">
        <Link to="StreamGraph">
          <img src="https://user-images.githubusercontent.com/2003804/35200551-94f9f346-ff08-11e7-9600-4cc0766b94e7.png" alt="StreamGraph" />
          <h4>Stream Graph</h4>
        </Link>
        <p>(Requires <code>highcharts 6+</code> & <code>streamgraph</code> extension)</p>
      </div>
      <div className="col">
        <Link to="Polar">
          <img src="https://user-images.githubusercontent.com/2003804/41313358-a679ddaa-6e81-11e8-9c32-63fd2a793130.png" alt="Polar"/>
          <h4>Polar Axis</h4>
        </Link>
        <p>(Requires <code>highcharts-more</code> module)</p>
      </div>
      <div className="col">
        <Link to="Gauge">
          <img src="https://user-images.githubusercontent.com/2003804/41313357-a65e432e-6e81-11e8-9a5c-946116030493.png" alt="Gauge"/>
          <h4>Solid Gauge</h4>
        </Link>
        <p>(Requires <code>highcharts-more</code> and <code>solid-gauge</code> modules)</p>
      </div>
    </div>

    <img src="https://user-images.githubusercontent.com/2003804/40682476-c1ea6be4-6383-11e8-826c-a617db5ef726.png" alt="React JSX Highstock" />
    <h2><span className="sr-only">React JSX Highstock</span> Examples</h2>

    <div className="grid">
      <div className="col">
        <Link to="Highstocks">
          <img src="https://user-images.githubusercontent.com/2003804/28792315-15357154-7627-11e7-8c73-3df7d564e49c.png" alt="Highstock" />
          <h4>Highstock chart</h4>
        </Link>
        <p></p>
      </div>
      <div className="col">
        <Link to="HighstockPlotBands">
          <img src="https://user-images.githubusercontent.com/2003804/29004791-b5dfff00-7ac5-11e7-8845-d6dd3943e4e2.png" alt="HighstockPlotBands" />
          <h4>Highstock with Navigator Plot Bands</h4>
        </Link>
        <p></p>
      </div>
      <div className="col">
        <Link to="CustomComponent">
          <img src="https://user-images.githubusercontent.com/2003804/28792318-153a0746-7627-11e7-883f-f28b03bcd386.png" alt="CustomComponent" />
          <h4>Custom components</h4>
        </Link>
        <p>(Using <a href="http://react-day-picker.js.org/" target="_blank" rel="noopener noreferrer"><code>react-day-picker</code></a> Date Pickers)</p>
      </div>
    </div>

    <img src="https://user-images.githubusercontent.com/2003804/47213017-ac588080-d391-11e8-8711-9e7c4e2fadec.png" alt="React JSX Highmaps" />
    <h2><span className="sr-only">React JSX Highmaps</span> Examples</h2>

    <div className="grid">
      <div className="col">
        <Link to="Map">
          <img src="https://user-images.githubusercontent.com/2003804/47213289-6fd95480-d392-11e8-8dcb-f8243f435017.png" alt="Map"/>
          <h4>Simple Map</h4>
        </Link>
        <p></p>
      </div>
      <div className="col">
        <Link to="MapBubble">
          <img src="https://user-images.githubusercontent.com/2003804/47213455-00179980-d393-11e8-904b-4be46615e8de.png" alt="MapBubble"/>
          <h4>Map Bubble with Latitude and Longitude</h4>
        </Link>
        <p>(Requires the <code>Proj4js</code> library)</p>
      </div>
    </div>
  </div>
);

export default ExampleList;
