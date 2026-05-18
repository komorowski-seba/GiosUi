import { Button, Card } from 'antd';
import { DrawerComponent } from '../components/DrawerComponent';
import { MapComponent } from '../components/MapComponent';
import type { MapMarker } from '../components/MapComponent';
import { useAppStore } from '../store/use-store';

export function MapView() {
    const isOpent: boolean = useAppStore((s) => s.isOpenModal);
    const useStore = useAppStore((s) => s.setOpenModal);
    
    const markers: MapMarker[] = [
        { id: '1', name: '11', position: [52.2297, 21.0122] },
        { id: '2', name: '22', position: [52.2197, 21.0222] },
    ]

    const handleMarkerClick = (marker: MapMarker): void => {
        useStore(true);
    };

    const handleClick = () => {
        // dispatch(setDrawerOpen(true)); // <<< ---
    };
    
    return (
        <>
            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
                <h2>Widok maps</h2>
                <Button onClick = {handleClick}>
                    Pokaż maps szczegóły
                </Button>

                <div style={{ flex: 1 }}>
                    <Card title="Mapa" style={{ height: '100%', width: '100%' }}>
                        <MapComponent markers={markers} onMarkerClick = {handleMarkerClick} />
                    </Card>
                    <DrawerComponent />
                </div>
            </div>
        </>
    );
}