import {
    List,
    Card,
    Spin,
    Empty,
} from 'antd';
import { useWeatherServiceHook } from '../hooks/use-weather-service.hook';
import type { SensorLocationDto } from '../dto/sensor-location.dto';
import styles from './list.view.module.css';
import { ItemStationComponent } from '../components/item-station.component.tsx';

export function ListView(): JSX.Element {
    const { data, isLoading, isFetching } = useWeatherServiceHook('Polska');

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
                        renderItem={(sensor: SensorLocationDto) => (<ItemStationComponent sensor={sensor} />)}
                    />
                )}
            </Card>
        </div>
    );
}
