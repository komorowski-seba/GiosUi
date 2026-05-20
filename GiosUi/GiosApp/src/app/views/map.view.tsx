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
            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
                <h2>Stations</h2>

                <div style={{ flex: 1 }}>
                    <Card title="Mapa" style={{ height: '100%', width: '100%' }}>
                        {isLoading || isFetching ? (
                            <div>Ładowanie danych...</div>
                        ) : data && data.length > 0 ? (
                            <MapComponent markers={getMapMarkers(data)} onMarkerClick={handleMarkerClick} />
                        ) : (
                            <div>Brak danych do wyświetlenia na mapie</div>
                        )}                        
                    </Card>
                    <DrawerComponent />
                </div>
            </div>
        </>
    );
}