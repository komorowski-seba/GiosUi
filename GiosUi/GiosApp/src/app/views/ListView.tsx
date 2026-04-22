import { Button } from 'antd';
import { useDispatch } from 'react-redux';

export function ListView(): Element {
    const dispatch = useDispatch();

    const handleClick = () => {
        // dispatch(setDrawerOpen(true));
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