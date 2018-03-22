export default `
import Highcharts from 'highcharts';
import addHeatmapModule from 'highcharts/modules/heatmap';
import addTreemapModule from 'highcharts/modules/treemap';

// Apply Highcharts modules
addHeatmapModule(Highcharts);
addTreemapModule(Highcharts);

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
        <HighchartsChart colorAxis={colorAxis}>
          <Title>Treemap</Title>

          <Legend />

          <XAxis />

          <YAxis id="value">
            <TreemapSeries id="tree" name="Tree" data={treemapData} layoutAlgorithm="squarified" />
          </YAxis>
        </HighchartsChart>
      </div>
    );
  }
}

export default withHighcharts(Treemap, Highcharts);`;
