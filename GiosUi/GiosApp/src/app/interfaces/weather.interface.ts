import type { CurrentWeatherDto } from '../dto/current-weather.dto';
import type { SensorLocationDto } from '../dto/sensor-location.dto';

export interface IWeather {
    searchPolandSensors(city: string, count: number): Promise<SensorLocationDto[]>;
    getCurrentWeather(latitude: number, longitude: number): Promise<CurrentWeatherDto>;
}