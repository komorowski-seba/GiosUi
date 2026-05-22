import { Button, Card } from 'antd';
import { DrawerComponent } from '../components/DrawerComponent';
import { MapComponent } from '../components/MapComponent';
import type { MapMarker } from '../components/MapComponent';
import { useAppStore } from '../store/use-store';
import { useWeatherServiceHook } from '../hooks/use-weather-service.hook';

export function MapView() {
    const isOpent: boolean = useAppStore((s) => s.isOpenModal);
    const useStore = useAppStore((s) => s.setOpenModal);
    const selectedCity = useAppStore((s) => s.selectedCity);
    const { data, isLoading, isFetching } = useWeatherServiceHook('Polska');

    const handleMarkerClick = (marker: MapMarker): void => {
        useStore(true);
    };

    const getMapMarkers = (dto: SensorLocationDto[]): MapMarker[] => {
        if (!Array.isArray(dto)) 
            return [];
        
        const result: MapMarker[] = dto?.map(i => ({
            id: i.id.toString(),
            name: i.name,
            position: [i.latitude, i.longitude]
        })) ?? []; 
        
        return result;
    }
    
    return (
        <>
            <h2>Stations</h2>

            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1 }}>
                    <Card 
                        title="Mapa" 
                        style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}
                        styles={{ body: { flex: 1, padding: 0, height: '100%' } }} >
                        { isLoading || isFetching ? (
                            <div>Loading data...</div>
                        ) : data && data.length > 0 ? (
                            <MapComponent markers={getMapMarkers(data)} onMarkerClick={handleMarkerClick} />
                        ) : (
                            <div>No data to display on the map</div>
                        )}
                    </Card>
                    <DrawerComponent />
                </div>
            </div>
        </>
    );
}