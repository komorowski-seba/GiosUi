import { Button } from 'antd';
import { useAppDispatch } from '../app/hooks';
import { openDrawer } from '../features/ui/uiSlice';

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