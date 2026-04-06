import { Button } from 'antd';
import { useDispatch } from 'react-redux';
// import { openDrawer } from '../features/ui/uiSlice';

export default function MapViewA() {
    const dispatch = useAppDispatch();

    return (
        <>
            <h2>Widok A</h2>
            <Button onClick={() => dispatch(openDrawer({ id: 123 }))}>
                Pokaż szczegóły
            </Button>
        </>
    );
}


/*

const stations = [{ id: 1, name: 'Stacja A' }];
dispatch(loadStations(stations)); // Musisz podać tablicę Station
dispatch(setDrawerOpen(true));  // Otwiera szufladę
dispatch(setDrawerOpen(false)); // Zamyka szufladę

------------------------

import { useDispatch } from 'react-redux';
import { setDrawerOpen } from './stationSlice';

const MapMarker = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    // Wysyłamy informację: "Otwórz szufladę"
    dispatch(setDrawerOpen(true));
  };

  return <button onClick={handleClick}>Szczegóły stacji</button>;
};

*/