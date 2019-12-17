export default `
// Rendered in App.js with <DateRangePickers />

const DateRangePickers = () => {
  const Highcharts = useHighcharts();
  const axis = useAxis('xAxis');

  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  const handleFromDateChange = useCallback(fromDate => {
    const newMin = startOfDay(fromDate).valueOf();
    const newMax = (newMin >= to) ? newMin + ONE_DAY : to.valueOf();

    axis.setExtremes(newMin, newMax);
  },[to, axis]);

  const handleToDateChange = useCallback(toDate => {
    const newMax = startOfDay(toDate).valueOf();
    const newMin = (newMax <= from) ? newMax - ONE_DAY : from.valueOf();

    axis.setExtremes(newMin, newMax);
  },[from, axis]);

  useEffect(() => {
    if (!axis) return;
    
    const handleAfterSetExtremes = ({ min, max }) => {
      setFrom(new Date(min));
      setTo(new Date(max));
    };

    Highcharts.addEvent(axis.object, 'afterSetExtremes', handleAfterSetExtremes);
    const { min, max } = axis.getExtremes();
    setFrom(new Date(min));
    setTo(new Date(max));

    return () => {
      Highcharts.removeEvent(axis.object, 'afterSetExtremes', handleAfterSetExtremes);
    }
  }, [axis]);

  if (from === null || to === null) {
    return null;
  }

  return (
    <div className="date-range-pickers">
      <span className="date-range-pickers__from-label">From: </span>
      <DayPickerInput
        value={from}
        format={DAY_FORMAT}
        formatDate={formatDate}
        parseDate={parseDate}
        dayPickerProps={{ month: from }}
        onDayChange={handleFromDateChange} />
      <span className="date-range-pickers__to-label">To: </span>
      <DayPickerInput
        value={to}
        format={DAY_FORMAT}
        formatDate={formatDate}
        parseDate={parseDate}
        dayPickerProps={{ month: to }}
        onDayChange={handleToDateChange} />
    </div>
  )
};

export default DateRangePickers;
`;
