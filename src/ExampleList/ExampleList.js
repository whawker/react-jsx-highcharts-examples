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
    </div>
  </div>
);

export default ExampleList;