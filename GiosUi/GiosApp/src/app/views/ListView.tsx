import { Button } from 'antd';
import { useDispatch } from 'react-redux';

export function ListView() {
    const dispatch = useDispatch();

    const handleClick = () => {
        // dispatch(setDrawerOpen(true));
    };
    
    return (
        <>
            <h2>Widok A</h2>
            <Button onClick={handleClick()}>
                Pokaż szczegóły
            </Button>
        </>
    );
}