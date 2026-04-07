import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { DrawerComponent } from '../components/DrawerComponent';
import { setDrawerOpen } from '../stores/reducer';

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
            <DrawerComponent />
        </>
    );
}