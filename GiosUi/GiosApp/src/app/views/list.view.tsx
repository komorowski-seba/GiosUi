import { Button } from 'antd';
import { useWeatherServiceHook } from '../hooks/use-weather-service.hook';
import { useAppStore } from '../store/use-store';

export function ListView(): JSX.Element {
    const selectedCity: string = useAppStore((s) => s.selectedCity);
    const setSelectedCity = useAppStore((s) => s.setSelectedCity);
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
