export interface SensorLocationDto {
    id: number;
    city: string;
    latitude: number;
    longitude: number;
    country: string;
    province?: string;
}