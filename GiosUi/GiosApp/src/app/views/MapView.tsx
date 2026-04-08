import { Button, Card } from 'antd';
import { useDispatch } from 'react-redux';
import { DrawerComponent } from '../components/DrawerComponent';
import { setDrawerOpen } from '../stores/reducer';
import { MapComponent } from '../components/MapComponent';


export function MapView() {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setDrawerOpen(true));
        console.log(" ===> show drawer")
    };
    
    return (
        <>
            <h2>Widok maps</h2>
            <Button onClick = {handleClick}>
                Pokaż maps szczegóły
            </Button>
            <Card title="Mapa">
                <MapComponent />
            </Card>
            <DrawerComponent />
        </>
    );
}

/*

import { MapView } from "./MapView";

function App() {

  const handleMarkerClick = (marker: any) => {
    console.log("Kliknięto marker:", marker);
    alert(marker.name);
  };

  return (
    <MapView
      markers={markers}
      onMarkerClick={handleMarkerClick}
    />
  );
}

export default App;


 */