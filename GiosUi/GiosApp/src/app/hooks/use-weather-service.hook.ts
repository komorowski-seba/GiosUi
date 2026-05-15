import { useQuery } from '@tanstack/react-query';
import { diContainer } from '../services/di-container.service';
import type { IWeather } from '../interfaces/weather.interface';

export const useWeatherServiceHook = (query: string) => {
    const weatherService: IWeather =
        diContainer.resolve<IWeather>('IWeather');
    
    return useQuery({
        queryKey: ["pl-sensors", query],
        queryFn: () =>
            weatherService.searchPolandSensors(query, 100),
        enabled: query.length >= 2,
    });
};
