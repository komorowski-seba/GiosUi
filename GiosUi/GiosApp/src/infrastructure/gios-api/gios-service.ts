import { Api } from './gios-api';
import type { IGiosService } from '../../app/interfaces/gios-service.interface';

export class GiosService implements IGiosService {
    private api: Api;
    
    constructor() {
        this.api = new Api();
    }
    
    public async getAll(page: number, size: number, sort: string): Promise<Station[]>
    {
        const response = await this.api.v1.getAutomaticAndManualStation({
            page: page,
            size: size,
            sort: sort,
       });
       
       const stations = response.data["Lista stacji pomiarowych"];
       stations?.forEach(station => {
         console.log(station["Nazwa stacji"]);
       });

        return stations as unknown as Station[];
    }
}