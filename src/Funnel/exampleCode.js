export default `
import Highcharts from 'highcharts';
import 'highcharts/modules/funnel';

const plotOptions = {
  series: {
    dataLabels: {
      enabled: true,
      format: '<b>{point.name}</b> ({point.y:,.0f})',
      softConnector: true
    },
    center: ['40%', '50%'],
    neckWidth: '30%',
    neckHeight: '25%',
    width: '80%'
  }
};

const funnelData = [
  ['Website visits', 15654],
  ['Downloads', 4064],
  ['Requested price list', 1987],
  ['Invoice sent', 976],
  ['Finalized', 846]
];

const Funnel = () => (
  <div className="app">
    <HighchartsProvider Highcharts={Highcharts}>
      <HighchartsChart plotOptions={plotOptions}>
        <Title>Sales funnel</Title>

        <FunnelSeries name="Unique users" data={funnelData} />
      </HighchartsChart>

      <ExampleCode name="Funnel">{code}</ExampleCode>
    </HighchartsProvider>
  </div>
);

export default Funnel`;
