import { Button, Card } from 'antd';
import { useDispatch } from 'react-redux';
import { DrawerComponent } from '../components/DrawerComponent';
import { setDrawerOpen } from '../stores/reducer';
import { MapComponent } from '../components/MapComponent';
import type { MapMarker } from '../components/MapComponent';

export function MapView() {
    const dispatch = useDispatch();
    const markers: MapMarker[] = [
        { id: '1', name: '11', position: [52.2297, 21.0122] },
        { id: '2', name: '22', position: [52.2197, 21.0222] },
    ]

    const handleMarkerClick = (marker: MapMarker): void => {
        console.log('marker: ', marker.id);
    };

    const handleClick = () => {
        dispatch(setDrawerOpen(true));
    };
    
    return (
        <>
            <h2>Widok maps</h2>
            <Button onClick = {handleClick}>
                Pokaż maps szczegóły
            </Button>
            <Card title="Mapa">
                <MapComponent markers={markers} onMarkerClick = {handleMarkerClick} />
            </Card>
            <DrawerComponent />
        </>
    );
}

/*

import { MapView } from "./MapView";

function App() {

  return (
    <MapView
      markers={markers}
      onMarkerClick={handleMarkerClick}
    />
  );
}

export default App;


 */