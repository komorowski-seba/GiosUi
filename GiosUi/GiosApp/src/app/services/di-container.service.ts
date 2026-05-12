import type { IWeather } from "../../app/interfaces/weather.interface";

class DIContainer {
    private services = new Map<string, unknown>();

    register<T>(token: string, instance: T) {
        this.services.set(token, instance);
    }

    resolve<T>(token: string): T | null {
        const service = this.services.get(token);
        if (!service) {
            return null;
        }
        return service as T;
    }
}

export const diContainer = new DIContainer();