import {
    List,
    Typography,
    Avatar,
    Collapse
} from 'antd';
import { useAppStore } from '../store/use-store';
import type { IMap } from '../interfaces/map.interface';
import { diContainer } from '../services/di-container.service';
import StationIcon from '../../assets/station.png';
import type { SensorLocationDto } from '../dto/sensor-location.dto';
import { RadarChartOutlined } from '@ant-design/icons';
import styles from './item-station.component.module.css';

type ItemStationProps = {
    sensor: SensorLocationDto,
}

export function ItemStationComponent({ sensor }: ItemStationProps): JSX.Element {
    const selectedCity: string = useAppStore((s) => s.selectedCity);
    const setSelectedCity = useAppStore((s) => s.setSelectedCity);
    const mapService: IMap = diContainer.resolve<IMap>('IMap');

    function handleRowClick(id: number) {
        setSelectedCity(id === selectedCity ? 0 : id);
    };
    
    return (
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
                showArrow={false}
                className={styles.collapse}
                items={[
                    {
                        key: 'details',
                        label: null,
                        style: { padding: 0 },
                        children: (
                            <div
                                className={styles.detailsContainer}
                                onClick={(e) => handleRowClick(sensor.id)}
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
    );
}