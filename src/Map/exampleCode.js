export default `// useSWR from 'swr' library
const fetcher = (...args) => fetch(...args).then(res => res.json());

const Map = () => {
  const { data, error } = useSWR(
    'https://code.highcharts.com/mapdata/custom/europe.geo.json',
    fetcher
  );

  if (error) return <div>Failed to load map.</div>;
  if (!data) return <div>Loading…</div>;
  return (
    <div className="app">
      <HighmapsProvider Highcharts={Highmaps}>
        <HighchartsMapChart map={data}>
          <Title>Nordic countries</Title>

          <Subtitle>
            Demo of drawing all areas in the map, only highlighting partial data
          </Subtitle>

          <MapSeries
            name="Area"
            data={[
              ['is', 1],
              ['no', 1],
              ['se', 1],
              ['dk', 1],
              ['fi', 1]
            ]}
            dataLabels={{
              enabled: true,
              color: '#FFFFFF',
              format: '{point.name}'
            }}
          />

          <MapNavigation>
            <MapNavigation.ZoomIn />
            <MapNavigation.ZoomOut />
          </MapNavigation>

          <Tooltip />

          <Credits />
        </HighchartsMapChart>
      </HighmapsProvider>
    </div>
  );
};`
