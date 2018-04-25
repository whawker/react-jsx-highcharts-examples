export default `
// Rendered in App.js with <DateRangePickers axisId="xAxis" />

class DateRangePickers extends Component {

  constructor (props) {
    super(props);

    this.handleFromDateChange = this.handleFromDateChange.bind(this);
    this.handleToDateChange = this.handleToDateChange.bind(this);
    this.handleAfterSetExtremes = this.handleAfterSetExtremes.bind(this);

    this.state = {
      min: null,
      max: null
    };
  }

  componentDidMount () {
    const { getHighcharts, getAxis, getExtremes } = this.props;
    const Highcharts = getHighcharts(); // Get Highcharts injected via withHighcharts

    Highcharts.addEvent(getAxis(), 'afterSetExtremes', this.handleAfterSetExtremes);

    const { min, max } = getExtremes();
    this.setState({
      min,
      max
    });
  }

  componentWillUnmount () {
    const { getHighcharts, getAxis } = this.props;
    const Highcharts = getHighcharts(); // Get Highcharts injected via withHighcharts
    const axis = getAxis();
    if (axis) {
      Highcharts.removeEvent(axis, 'afterSetExtremes', this.handleAfterSetExtremes);
    }
  }

  handleFromDateChange (fromDate) {
    let { max } = this.props.getExtremes();
    let selectedTime = fromDate.startOf('day').valueOf();

    let newMax = (selectedTime >= max) ? selectedTime + 86400000 : max;
    this.props.setExtremes(selectedTime, newMax);
  }

  handleToDateChange (toDate) {
    let { min } = this.props.getExtremes();
    let selectedTime = toDate.startOf('day').valueOf();

    let newMin = (selectedTime <= min) ? selectedTime - 86400000 : min;
    this.props.setExtremes(newMin, selectedTime);
  }

  handleAfterSetExtremes (e) {
    const { min, max } = e;
    this.setState({
      min,
      max
    });
  }

  render () {
    const axis = this.props.getAxis();
    if (!axis) return null;
    const { min, max } = this.state;

    const fromDate = moment(min).format(DAY_FORMAT);
    const toDate = moment(max).format(DAY_FORMAT);

    return (
      <div className="date-range-pickers">
        <span className="date-range-pickers__from-label">From: </span>
        <DayPickerInput
          value={fromDate}
          onDayChange={this.handleFromDateChange}
          format={DAY_FORMAT} />
        <span className="date-range-pickers__to-label">To: </span>
        <DayPickerInput
          value={toDate}
          onDayChange={this.handleToDateChange}
          format={DAY_FORMAT} />
      </div>
    );
  }
}

// The important bit, using the provideAxis HOC to inject Highcharts axis methods
export default provideAxis(DateRangePickers);`;
