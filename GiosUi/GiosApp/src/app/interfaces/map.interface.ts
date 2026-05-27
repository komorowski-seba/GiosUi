export interface IMap {
    getStaticIconMap(lat: number, lng: number, zoom: number, sizeX: number, sizeY: number): string;
}