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

    const isSelected = selectedCity === sensor.id;
    
    function handleRowClick(id: number) {
        setSelectedCity(id === selectedCity ? 0 : id);
    };
    
    return (
        <List.Item
            onClick={() => handleRowClick(sensor.id)}
            className={`${styles.listItem} ${isSelected ? styles.active : ''}`}
        >
            <div className={styles.listItemRow}>
                <List.Item.Meta
                    avatar={ <Avatar size={50} src={StationIcon} /> }
                    title={
                        <Typography.Text strong>
                            {sensor.name}
                        </Typography.Text>                                    }
                    description={`Country: ${sensor.country}`}
                />
            </div>

            <Collapse
                ghost
                activeKey={isSelected ? ['details'] : []}
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
                                <div className={styles.leftSection} >
                                    <Typography.Title level={5}>Szczegóły stacji</Typography.Title>
                                    <Typography.Text>Id: {sensor.id}</Typography.Text><br />
                                    <Typography.Text>Latitude: {sensor.latitude}</Typography.Text><br />
                                    <Typography.Text>Longitude: {sensor.longitude}</Typography.Text>
                                </div>

                                <div className={styles.middleSection}>
                                    <img src={sensor.imageUrl || "sciezka_do_domyslnej_grafiki.png"} alt="Img" className={styles.stationImage} />
                                </div>

                                <div className={styles.rightSection}>
                                    <Typography.Text ellipsis>{`${sensor.admin1}, ${sensor.admin2}, ${sensor.admin3}`}</Typography.Text>
                                </div>
                            </div>
                        )
                    }
                ]}
            />
        </List.Item>
    );
}