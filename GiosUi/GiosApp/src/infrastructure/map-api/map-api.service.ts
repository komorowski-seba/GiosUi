import type { IMap } from '../../app/interfaces/map.interface.ts'

export class MapApiService implements IMap {
    getStaticIconMap(lat: number, lng: number, zoom: number, sizeX: number, sizeY: number): string
    {
        const result: string = `https://staticmap.openstreetmap.de/staticmap.php` +
            `?center=${lat},${lng}&zoom=${zoom}&size=${sizeX},${sizeY}&markers=${lat},${lng},red-pushpin`;
        return result;
    }
}