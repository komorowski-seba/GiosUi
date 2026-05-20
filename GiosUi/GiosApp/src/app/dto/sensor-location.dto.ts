export interface SensorLocationDto {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    country: string;
    province?: string;
}