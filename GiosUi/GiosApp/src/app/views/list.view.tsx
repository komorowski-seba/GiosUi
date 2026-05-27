import {
    List,
    Card,
    Typography,
    Avatar,
    Spin,
    Empty,
    Collapse
} from 'antd';
import { useWeatherServiceHook } from '../hooks/use-weather-service.hook';
import { useAppStore } from '../store/use-store';
import { RadarChartOutlined } from '@ant-design/icons';
import type { SensorLocationDto } from '../dto/sensor-location.dto';
import StationIcon from '../../assets/station.png';
import { diContainer } from '../services/di-container.service';
import type { IMap } from '../interfaces/map.interface';
import styles from './list.view.module.css';

export function ListView(): JSX.Element {
    const selectedCity: string = useAppStore((s) => s.selectedCity);
    const setSelectedCity = useAppStore((s) => s.setSelectedCity);
    const { data, isLoading, isFetching } = useWeatherServiceHook('Polska');
    const mapService: IMap = diContainer.resolve<IMap>('IMap');

    const handleRowClick = (id: number) => {
        setSelectedCity(id === selectedCity ? 0 : id);
    };

    return (
        <div className={styles.container}>
            <Card
                className={styles.card}
                bodyStyle={{ padding: 0, height: '100%', overflow: 'auto' }}
            >
                {isLoading ? (
                    <div className={styles.loaderContainer}>
                        <Spin size="large" />
                    </div>
                ) : !data || data.length === 0 ? (
                    <Empty
                        description="No data"
                        className={styles.emptyState}
                    />
                ) : (
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(sensor: SensorLocationDto) => (
                            <List.Item
                                onClick={() => handleRowClick(sensor.id)}
                                className={styles.listItem}
                            >
                                <div className={styles.listItemRow}>
                                    <List.Item.Meta
                                        avatar={ <Avatar size={50} src={StationIcon} /> }
                                        title={
                                            <Typography.Text strong>
                                                {sensor.name}
                                            </Typography.Text>                                    }
                                        description={`ID: ${sensor.id}`}
                                    />

                                    <div className={styles.locationBadge}>
                                        {sensor.latitude && sensor.longitude && (
                                            <img
                                                src={mapService.getStaticIconMap(sensor.latitude, sensor.longitude, 12, 100, 100)}
                                                alt="Location"
                                                className={styles.staticMap}
                                            />
                                        )}
                                    </div>
                                </div>

                                <Collapse
                                    ghost
                                    activeKey={selectedCity === sensor.id ? ['details'] : []}
                                    collapsible="disabled"
                                    showArrow={false}
                                    className={styles.collapse}
                                    items={[
                                        {
                                            key: 'details',
                                            label: null,
                                            style: { padding: 0 }, /* Zostawione inline ze względu na strukturę antd */
                                            children: (
                                                <div
                                                    className={styles.detailsContainer}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <div>
                                                        <Typography.Title level={5}>Szczegóły stacji</Typography.Title>
                                                        <Typography.Text>Szerokość: {sensor.latitude}</Typography.Text><br />
                                                        <Typography.Text>Długość: {sensor.longitude}</Typography.Text>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    ]}
                                />
                            </List.Item>
                        )}
                    />
                )}
            </Card>
        </div>
    );
}
