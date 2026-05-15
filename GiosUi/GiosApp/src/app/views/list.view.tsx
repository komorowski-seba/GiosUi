import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { useWeatherServiceHook } from '../hooks/use-weather-service.hook';

export function ListView(): JSX.Element {
    const [selectedCity, setSelectedCity] = useState("");
    const { data, isLoading, isFetching } = useWeatherServiceHook(selectedCity);
    const cities = ["Polska", "Poland"];    
    
    return (
        <div>
            <h3>Wybierz miasto:</h3>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                {cities.map(city => (
                    <button
                        key={city}
                        onClick={() => setSelectedCity(city)}
                        style={{ fontWeight: selectedCity === city ? 'bold' : 'normal' }}
                    >
                        {city}
                    </button>
                ))}
            </div>

            <hr />

            {isLoading && selectedCity.length >= 2 && <p>Szukam sensorów dla: {selectedCity}...</p>}

            {data && (
                <div>
                    <h4>Sensory w {selectedCity}:</h4>
                    <ul>
                        {data.map((sensor: any) => (
                            <li key={sensor.id}>{sensor.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );

}
