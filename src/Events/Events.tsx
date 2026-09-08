import { useState } from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsChart,
  Chart,
  HighchartsProvider,
  XAxis,
  YAxis,
  Title,
  Legend,
  ScatterSeries
} from 'react-jsx-highcharts';
import ExampleCode from '../utils/ExampleCode';
import code from './exampleCode';
import { addDataPoint } from '../utils/data-helpers';

const myClicks = [
  [154, 97],
  [458, 235],
  [314, 127],
  [430, 207],
  [196, 113],
  [354, 223],
  [444, 253],
  [182, 59],
  [244, 249],
  [414, 253],
  [458, 209]
];

const Events = () => {
  const [userClicks, setUserClicks] = useState([]);
  const [clickCounter, setClickCounter] = useState(0);

  const handleClick = e => {
    setUserClicks(
      addDataPoint(userClicks, [e.xAxis[0].value, e.yAxis[0].value])
    );
    setClickCounter(clickCounter + 1);
  };

  const handleShow = () => {
    alert('Series shown');
  };

  const handleHide = () => {
    alert('Series hidden');
  };

  return (
    <div className="app">
      <HighchartsProvider Highcharts={Highcharts}>
        <HighchartsChart>
          <Chart zoomType="xy" onClick={handleClick} />

          <Title>Click to add data</Title>

          <Legend>
            <Legend.Title>Legend</Legend.Title>
          </Legend>

          <XAxis>
            <XAxis.Title>X Coord</XAxis.Title>
          </XAxis>

          <YAxis>
            <YAxis.Title>Y Coord</YAxis.Title>
            <ScatterSeries name="My clicks" data={myClicks} />
            <ScatterSeries
              name="Your clicks"
              data={userClicks}
              onHide={handleHide}
              onShow={handleShow}
            />
          </YAxis>
        </HighchartsChart>
      </HighchartsProvider>
      <p>
        Click count: <span>{clickCounter}</span>
      </p>

      <ExampleCode name="Events">{code}</ExampleCode>
    </div>
  );
};

export default Events;
