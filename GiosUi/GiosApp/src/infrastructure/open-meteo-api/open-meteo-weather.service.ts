import { httpClientSingleton } from '../../app/http-api/http-client.singleton';
import type { IWeather } from '../../app/interfaces/weather.interface';
import type { CurrentWeatherDto } from '../../app/dto/current-weather.dto';
import type { SensorLocationDto } from '../../app/dto/sensor-location.dto';
import { diContainer } from '../../app/services/di-container.service';

export class OpenMeteoWeatherService
    implements IWeather
{
    async searchPolandSensors(
        city: string, count: number
    ): Promise<SensorLocationDto[]> {
        const response = await httpClientSingleton.get(
            "https://geocoding-api.open-meteo.com/v1/search",
            {
                params: {
                    name: city,
                    countryCode: 'PL',
                    count: count,
                },
            }
        );

        return (response.data.results || []).map(
            (item: any): SensorLocationDto => ({
                id: item.id,
                name: item.name,
                latitude: item.latitude,
                longitude: item.longitude,
                country: item.country,
                province: item.admin1,
            })
        );
    }

    async getCurrentWeather(
        latitude: number,
        longitude: number
    ): Promise<CurrentWeatherDto> {
        const response = await httpClientSingleton.get(
            "https://api.open-meteo.com/v1/forecast",
            {
                params: {
                    latitude,
                    longitude,
                    current_weather: true,
                },
            }
        );

        return response.data.current_weather;
    }
}