export default `
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
      <ScatterSeries name="Your clicks" data={userClicks} onHide={handleHide} onShow={handleShow} />
    </YAxis>
  </HighchartsChart>
</HighchartsProvider>`;
