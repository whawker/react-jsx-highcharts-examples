import React from 'react';
import { Link } from 'react-router-dom';
import './ExampleList.css';

const ExampleList = () => (
  <div>
    <h1><code>react-jsx-highcharts</code> Examples</h1>
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
        <Link to="ImmutableJS">
          <img src="https://user-images.githubusercontent.com/2003804/28994982-77bc7998-79d4-11e7-903f-cc61b4f89c4a.png" alt="ImmutableJS" />
          <h4>Immutable.js Data Structures</h4>
        </Link>
        <p>(Requires <a href="https://facebook.github.io/immutable-js/" target="_blank"><code>Immutable</code></a>)</p>
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
          <h4>Aysnc loading message</h4>
        </Link>
        <p></p>
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
        <p>(Requires <code>react-jsx-highcharts > 2.0.0</code>)</p>
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
        <Link to="StreamGraph">
          <img src="https://user-images.githubusercontent.com/2003804/35200551-94f9f346-ff08-11e7-9600-4cc0766b94e7.png" alt="StreamGraph" />
          <h4>Stream Graph</h4>
        </Link>
        <p>(Requires <code>highcharts 6+</code> & <code>streamgraph</code> extension)</p>
      </div>
    </div>
  </div>
);

export default ExampleList;