import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { GiosService } from '../../infrastructure/gios-api/gios-service'
import { useEffect, useState } from 'react';


export function ListView(): Element {
    const dispatch = useDispatch();

    const handleClick = () => {
        // dispatch(setDrawerOpen(true));

        useEffect(() => {
            const fetchData = async () => {
                const a: IGiosService = new GiosService();
                const data = await a.getAll(0, 10, 'Nazwa stacji');
                setStations(data);
            };

            fetchData();
        }, []);
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