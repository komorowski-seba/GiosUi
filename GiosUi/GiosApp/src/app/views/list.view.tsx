import {
    List, 
    Card,
    Typography,
    Avatar,
    Spin,
    Empty 
} from 'antd';
import { useWeatherServiceHook } from '../hooks/use-weather-service.hook';
import { useAppStore } from '../store/use-store';
import { RadarChartOutlined } from '@ant-design/icons';
import type { SensorLocationDto } from '../dto/sensor-location.dto';
import StationIcon from '../../assets/station.png';
import { diContainer } from '../services/di-container.service';
import type { IMap } from '../interfaces/map.interface';

export function ListView(): JSX.Element {
    const selectedCity: string = useAppStore((s) => s.selectedCity);
    const setSelectedCity = useAppStore((s) => s.setSelectedCity);
    const { data, isLoading, isFetching } = useWeatherServiceHook('Polska');
    const cities = ["Polska", "Poland"];
    const mapService: IMap = diContainer.resolve<IMap>('IMap');
    
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                flex: 1,
            }}
        >
            <div style={{ marginBottom: 20, height: '160' }}>
                <h2>Stacje pogodowe</h2>
            </div>

            
            <hr />
            {/*{data && (*/}
            {/*    <div>*/}
            {/*        <ul>*/}
            {/*            {data.map((sensor: any) => (*/}
            {/*                <li key={sensor.id}>{sensor.name}</li>*/}
            {/*            ))}*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*)}*/}

            <Card
                style={{
                    flex: 1,
                    overflow: 'hidden',
                    borderRadius: 16,
                }}
                bodyStyle={{
                    padding: 0,
                    height: '100%',
                    overflow: 'auto'
                }}
            >
                {isLoading ? (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        <Spin size="large" />
                    </div>
                ) : !data || data.length === 0 ? (
                    <Empty
                        description="No data"
                        style={{ marginTop: 40 }}
                    />
                ) : (
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(sensor: SensorLocationDto) => (
                            <List.Item
                                style={{
                                    padding: '16px 20px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'stretch',
                                }}
                            >
                                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <List.Item.Meta
                                        avatar={ <Avatar size={50} src={StationIcon} /> }
                                        title={
                                            <Typography.Text strong>
                                                {sensor.name}
                                            </Typography.Text>                                    }
                                        description={`ID: ${sensor.id}`}
                                    />
    
                                    <div
                                        style={{
                                            fontSize: 11,
                                            fontWeight: 600,
                                            color: '#000000',
                                            minWidth: 80,
                                            textAlign: 'right'
                                        }}
                                    >
                                        {sensor.latitude && sensor.longitude && (
                                            <img
                                                src={mapService.getStaticIconMap(sensor.latitude, sensor.longitude, 12, 100, 100)}
                                                alt="Location"
                                                style={{
                                                    borderRadius: 8,
                                                    border: '1px solid #d9d9d9',
                                                    width: 150,
                                                    height: 150
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>

                                {true && (
                                    <div
                                        style={{
                                            marginTop: 16,
                                            display: 'flex',
                                            gap: 16,
                                            justifyContent: 'center', // Środkowanie w poziomie
                                            alignItems: 'center',     // Środkowanie w pionie
                                            textAlign: 'left'         // Reset wyrównania tekstu (rodzic ma textAlign: 'right')
                                        }}
                                    >
                                        <div>
                                            <Typography.Title level={5}>Szczegóły stacji</Typography.Title>
                                            <Typography.Text>Szerokość: {sensor.latitude}</Typography.Text><br />
                                            <Typography.Text>Długość: {sensor.longitude}</Typography.Text>
                                        </div>

                                        {/*{sensor.latitude && sensor.longitude && (*/}
                                        {/*    <img*/}
                                        {/*        src={getStaticMapUrl(sensor.latitude, sensor.longitude)}*/}
                                        {/*        alt="Lokalizacja stacji"*/}
                                        {/*        style={{*/}
                                        {/*            borderRadius: 8,*/}
                                        {/*            border: '1px solid #d9d9d9',*/}
                                        {/*            width: 150,*/}
                                        {/*            height: 150*/}
                                        {/*        }}*/}
                                        {/*    />*/}
                                        {/*)}*/}
                                    </div>
                                )}
                            </List.Item>
                        )}
                    />
                )}
            </Card>
            
        </div>
    );

}

/*

            // { HEADER }
<div style={{ marginBottom: 16 }}>
    <h2>Stacje pogodowe</h2>

    <div style={{ display: 'flex', gap: 8 }}>
        {cities.map(city => (
            <button
                key={city}
                onClick={() => setSelectedCity(city)}
                style={{
                    padding: '8px 16px',
                    borderRadius: 8,
                    border: '1px solid #d9d9d9',
                    cursor: 'pointer',
                    background:
                        selectedCity === city
                            ? '#1677ff'
                            : 'white',
                    color:
                        selectedCity === city
                            ? 'white'
                            : 'black',
                    fontWeight: 500
                }}
            >
                {city}
            </button>
        ))}
    </div>
</div>

// { LISTA }

</div>
);

*/