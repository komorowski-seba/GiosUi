export function toStation(dto: StationLdDTO): Station {
    return {
        id: dto["Identyfikator stacji"] ?? 0,
        stationCode: this.dto["Kod stacji"] || "",
        stationName: this.dto["Nazwa stacji"] || "",
        lat: this.dto["WGS84 φ N"] || "",
        lon: this.dto["WGS84 λ E"] || "",
        cityId: this.dto["Identyfikator miasta"] ?? 0,
        cityName: this.dto["Nazwa miasta"] || "",
        gmina: this.dto.Gmina || "",
        powiat: this.dto.Powiat || "",
        voivodeship: this.dto.Województwo || "",
        street: this.dto.Ulica || ""
    };
}
