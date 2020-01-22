import React, { Component } from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsChart, Chart, HighchartsProvider, XAxis, YAxis, Title, Legend, LineSeries
} from 'react-jsx-highcharts';
import ExampleCode from '../utils/ExampleCode';
import code from './exampleCode';
import { createRandomData, addDataPoint } from '../utils/data-helpers';

class LiveUpdate extends Component {

  constructor (props) {
    super(props);

    const now = Date.now();
    this.state = {
      data1: createRandomData(now),
      data2: createRandomData(now),
      liveUpdate: false
    };
  }

  componentDidMount () {
    this.handleStartLiveUpdate();
  }

  componentWillUnmount () {
    window.clearInterval(this.state.liveUpdate);
  }

  updateLiveData = () => {
    const { data1, data2 } = this.state;

    this.setState({
      data1: addDataPoint(data1),
      data2: addDataPoint(data2)
    });
  }

  handleStartLiveUpdate = e => {
    e && e.preventDefault();
    this.setState({
      liveUpdate: window.setInterval(this.updateLiveData, 1000)
    });
  }

  handleStopLiveUpdate = e => {
    e.preventDefault();
    window.clearInterval(this.state.liveUpdate);
    this.setState({
      liveUpdate: false
    });
  }

  render () {
    const { data1, data2, liveUpdate } = this.state;

    return (
      <div className="app">
        <HighchartsProvider Highcharts={Highcharts}>
          <HighchartsChart>
            <Chart />

            <Title>Dynamically updating data</Title>

            <Legend>
              <Legend.Title>Legend</Legend.Title>
            </Legend>

            <XAxis type="datetime">
              <XAxis.Title>Time</XAxis.Title>
            </XAxis>

            <YAxis>
              <YAxis.Title>Pressure (m)</YAxis.Title>
              <LineSeries name="Sensor 1" data={data1} />
              <LineSeries name="Sensor 2" data={data2} />
            </YAxis>
          </HighchartsChart>
        </HighchartsProvider>
        <div>
          {!liveUpdate && (
            <button className="btn btn-success" onClick={this.handleStartLiveUpdate}>Live update</button>
          )}
          {liveUpdate && (
            <button className="btn btn-danger" onClick={this.handleStopLiveUpdate}>Stop update</button>
          )}
        </div>

        <ExampleCode name="LiveUpdate">{code}</ExampleCode>
      </div>
    );
  }
}

export default LiveUpdate;
