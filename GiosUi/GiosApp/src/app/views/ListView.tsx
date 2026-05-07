import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { IGiosService } from '../interfaces/gios-service.interface';
import { GiosService } from '../../infrastructure/gios-api/gios-service';

export function ListView(): Element {
    const dispatch = useDispatch();

    const handleClick = () => {
        // dispatch(setDrawerOpen(true));
        const a: IGiosService = new GiosService();
    };
    
    return (
        <>
            <h2>Widok list</h2>
            <Button onClick={handleClick()}>
                Pokaż list szczegóły
            </Button>
        </>
    );
}