import React, { Component } from "react";
import Highcharts from "highcharts/highstock";
import {
  HighchartsStockChart,
  Chart,
  HighchartsProvider,
  XAxis,
  YAxis,
  Title,
  Legend,
  AreaSplineSeries,
  SplineSeries,
  Navigator,
  RangeSelector,
  Tooltip,
} from "react-jsx-highstock";
import ExampleCode from "../utils/ExampleCode";
import code from "./exampleCode";
import { createRandomData } from "../utils/data-helpers";

const now = Date.now();
const data1 = createRandomData(now, 1e7, 500);
const data2 = createRandomData(now, 1e7, 500);

const App = () => {
  return (
    <div className="app">
      <HighchartsProvider Highcharts={Highcharts}>
        <HighchartsStockChart>
          <Chart zoomType="x" />

          <Title>Highstocks Example</Title>

          <Legend>
            <Legend.Title>Key</Legend.Title>
          </Legend>

          <Tooltip />

          <XAxis>
            <XAxis.Title>Time</XAxis.Title>
          </XAxis>

          <YAxis>
            <YAxis.Title>Price</YAxis.Title>
            <AreaSplineSeries id="profit" name="Profit" data={data1} />
          </YAxis>

          <YAxis opposite>
            <YAxis.Title>Social Buzz</YAxis.Title>
            <SplineSeries id="twitter" name="Twitter mentions" data={data2} />
          </YAxis>

          <RangeSelector selected={1}>
            <RangeSelector.Button count={1} type="day">
              1d
            </RangeSelector.Button>
            <RangeSelector.Button count={7} type="day">
              7d
            </RangeSelector.Button>
            <RangeSelector.Button count={1} type="month">
              1m
            </RangeSelector.Button>
            <RangeSelector.Button type="all">All</RangeSelector.Button>
            <RangeSelector.Input boxBorderColor="#7cb5ec" />
          </RangeSelector>

          <Navigator>
            <Navigator.Series seriesId="profit" />
            <Navigator.Series seriesId="twitter" />
          </Navigator>
        </HighchartsStockChart>
      </HighchartsProvider>
      <ExampleCode name="Highstocks">{code}</ExampleCode>
    </div>
  );
};

export default App;
