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
import { FireOutlined } from '@ant-design/icons';
import type { SensorLocationDto } from '../dto/sensor-location.dto';

export function ListView(): JSX.Element {
    const selectedCity: string = useAppStore((s) => s.selectedCity);
    const setSelectedCity = useAppStore((s) => s.setSelectedCity);
    const { data, isLoading, isFetching } = useWeatherServiceHook('Polska');
    const cities = ["Polska", "Poland"];    
    
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
                                }}
                            >
                                <List.Item.Meta
                                    avatar={
                                        <Avatar
                                            size={48}
                                            icon={<FireOutlined />}
                                            style={{
                                                backgroundColor: '#ff4d4f',
                                            }}
                                        />
                                    }
                                    title={
                                        <Typography.Text strong>
                                            {sensor.name}
                                        </Typography.Text>                                    }
                                    description={`ID: ${sensor.id}`}
                                />

                                <div
                                    style={{
                                        fontSize: 22,
                                        fontWeight: 700,
                                        color: '#ff4d4f',
                                        minWidth: 80,
                                        textAlign: 'right'
                                    }}
                                >
                                    {sensor.temperature ?? '--'}°
                                </div>
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