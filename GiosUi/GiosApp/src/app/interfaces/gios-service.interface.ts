import { Station } from '../../domain/entity/Station'

export interface IGiosService {
    getAll(page: number, size: number, sort: string): Promise<Station[]>;
}