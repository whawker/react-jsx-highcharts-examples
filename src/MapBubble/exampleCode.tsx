export default `// useSWR from 'swr' library
const fetcher = (...args) => fetch(...args).then(res => res.json());

const MapBubble = () => {
  const { data: usCapitals } = useSWR(
    'https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/us-capitals.json',
    fetcher
  );
  
  const populationData = usCapitals?.map(({ population, ...rest }) => ({
    ...rest,
    z: population
  }));

  const { data, error } = useSWR(
    'https://code.highcharts.com/mapdata/countries/us/us-all.geo.json',
    fetcher
  );

  if (error) return <div>Failed to load map.</div>;
  if (!data) return <div>Loading…</div>;

  return (
    <div className="app">
      <HighmapsProvider Highcharts={Highmaps}>
        <HighchartsMapChart map={data}>
          <Title>Highmaps lat/lon demo</Title>

          <Subtitle>US State Capitals</Subtitle>

          <XAxis crosshair={{ snap: false }} />

          <YAxis crosshair={{ snap: false }}>
            <MapSeries
              mapData={data}
              borderColor="#606060"
              nullColor="rgba(200, 200, 200, 0.2)"
              showInLegend={false}
            />

            <MapLineSeries
              data={Highmaps.geojson(data, 'mapline')}
              color="gray"
              enableMouseTracking={false}
              showInLegend={false}
            />

            <MapBubbleSeries
              dataLabels={{
                enabled: true,
                format: '{point.capital}'
              }}
              color={Highmaps.defaultOptions.colors[0]}
              name="State Capitals"
              data={populationData}
              maxSize="12%"
            />
          </YAxis>

          <MapNavigation>
            <MapNavigation.ZoomIn />
            <MapNavigation.ZoomOut />
          </MapNavigation>

          <Tooltip pointFormat="{point.capital}, {point.parentState}: <b>{point.z}</b><br/>" />

          <Credits />

          <Legend />
        </HighchartsMapChart>
      </HighmapsProvider>
    </div>
  );
};
`
