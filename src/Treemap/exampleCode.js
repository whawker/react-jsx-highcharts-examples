export default `
import Highcharts from 'highcharts';
import 'highcharts/modules/heatmap';
import 'highcharts/modules/treemap';

const colorAxis = {
  minColor: '#FFFFFF',
  maxColor: Highcharts.getOptions().colors[0]
};

class Treemap extends Component {

  constructor (props) {
    super(props);

    this.state = {
      treemapData: [
        { name: 'A', value: 6, colorValue: 1 },
        { name: 'B', value: 6, colorValue: 2 },
        { name: 'C', value: 4, colorValue: 3 },
        { name: 'D', value: 3, colorValue: 4 },
        { name: 'E', value: 2, colorValue: 5 },
        { name: 'F', value: 2, colorValue: 6 },
        { name: 'G', value: 1, colorValue: 7 }
      ]
    };
  }

  render () {
    const treemapData = this.state.treemapData;

    return (
      <div className="app">
        <HighchartsProvider Highcharts={Highcharts}>
          <HighchartsChart colorAxis={colorAxis}>
            <Title>Treemap</Title>

            <Legend />

            <XAxis />

            <YAxis>
              <TreemapSeries name="Tree" data={treemapData} layoutAlgorithm="squarified" />
            </YAxis>
          </HighchartsChart>
        </HighchartsProvider>
      </div>
    );
  }
}

export default Treemap;`;
