/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface DataException {
  error_result?: string;
  error_reason?: string;
  error_solution?: string;
  error_help?: string;
  error_code?: string;
}

export interface StatisticsLdDTO {
  "@context"?: Record<string, object>;
  "Lista statystyk"?: object;
  meta?: Record<string, object>;
  links?: Record<string, string>;
  /** @format int32 */
  totalPages?: number;
}

export interface SensorLd {
  "@context"?: Record<string, object>;
  "Lista stanowisk pomiarowych dla podanej stacji"?: SensorLdDTO[];
  meta?: Record<string, object>;
  links?: Record<string, string>;
  /** @format int32 */
  totalPages?: number;
}

export interface SensorLdDTO {
  /** @format int64 */
  "Identyfikator stanowiska"?: number;
  /** @format int64 */
  "Identyfikator stacji"?: number;
  Wskaźnik?: string;
  "Wskaźnik - wzór"?: string;
  "Wskaźnik - kod"?: string;
  /** @format int64 */
  "Id wskaźnika"?: number;
}

export interface StationLd {
  "@context"?: Record<string, object>;
  "Lista stacji pomiarowych"?: StationLdDTO[];
  meta?: Record<string, object>;
  links?: Record<string, string>;
  /** @format int32 */
  totalPages?: number;
}

export interface StationLdDTO {
  /** @format int64 */
  "Identyfikator stacji"?: number;
  "Kod stacji"?: string;
  "Nazwa stacji"?: string;
  "WGS84 φ N"?: string;
  "WGS84 λ E"?: string;
  /** @format int64 */
  "Identyfikator miasta"?: number;
  "Nazwa miasta"?: string;
  Gmina?: string;
  Powiat?: string;
  Województwo?: string;
  Ulica?: string;
}

export interface StationMetaDataLdDTO {
  "@context"?: Record<string, object>;
  "Lista metadanych stacji pomiarowych"?: StationMetadata[];
  meta?: Record<string, object>;
  links?: Record<string, string>;
  /** @format int32 */
  totalPages?: number;
}

export interface StationMetadata {
  /** @format int64 */
  Nr?: number;
  "Kod stacji"?: string;
  "Kod międzynarodowy"?: string;
  "Nazwa stacji"?: string;
  "Stary Kod stacji"?: string;
  "Data uruchomienia"?: string;
  "Data zamknięcia"?: string;
  "Typ stacji"?: string;
  "Typ obszaru"?: string;
  "Rodzaj stacji"?: string;
  Województwo?: string;
  Miejscowość?: string;
  Adres?: string;
  "WGS84 φ N"?: string;
  "WGS84 λ E"?: string;
}

export interface SensorMetaDataLdDTO {
  "@context"?: Record<string, object>;
  "Lista metadanych stanowisk pomiarowych"?: SensorMetadata[];
  meta?: Record<string, object>;
  links?: Record<string, string>;
  /** @format int32 */
  totalPages?: number;
}

export interface SensorMetadata {
  /** @format int64 */
  Nr?: number;
  "Kod stanowiska"?: string;
  "Kod stacji"?: string;
  "Nazwa stacji"?: string;
  "Stary Kod stacji"?: string;
  "Wskaźnik - kod"?: string;
  Wskaźnik?: string;
  "Czas uśredniania"?: string;
  "Typ pomiaru"?: string;
  "Data uruchomienia"?: string;
  "Data zamknięcia"?: string;
  Województwo?: string;
  "Nazwa strefy"?: string;
}

export interface ExceedingDTO {
  "Typ normy"?: string;
  Strefa?: string;
  "Informacje dotyczące obszaru przekroczenia"?: string;
  "Przyczyny przekroczenia"?: string;
  "Stanowisko pomiarowe"?: string;
  "Data i godzina"?: string;
  "Czas trwania"?: string;
  /** @format int64 */
  "Liczba mieszkańców"?: number;
  /** @format double */
  "Wartość maksymalnego stężenia (µg/m3)"?: number;
  "Informacje o podjętych ograniczeniach"?: string;
  "Dodatkowe informacje"?: string;
  "Odnośnik do strony internetowej z informacjami"?: string;
  "Odnośnik do strony internetowej z planem działań"?: string;
  "Prognoza zmian stężeń"?: string;
  "Obszar geograficzny, na którym spodziewane są przekroczenia"?: string;
  "Informacje w sprawie grup ludności objętych ryzykiem"?: string;
  "Opis prawdopodobnych symptomów"?: string;
  "Zalecane środki ostrożności"?: string;
  "Wskazanie, gdzie można uzyskać dalsze informacje"?: string;
}

export interface ExceedingLdDTO {
  "@context"?: Record<string, object>;
  Przekroczenia?: ExceedingDTO[];
  meta?: Record<string, object>;
  links?: Record<string, string>;
  /** @format int32 */
  totalPages?: number;
}

export interface CurrentDataDTO {
  "@context"?: Record<string, object>;
  "Lista danych pomiarowych"?: DataDTOLd[];
  meta?: Record<string, object>;
  links?: Record<string, string>;
  /** @format int32 */
  totalPages?: number;
}

export interface DataDTOLd {
  "Kod stanowiska"?: string;
  Data?: string;
  /** @format double */
  Wartość?: number;
}

export interface ConcentrationDistributionsDTO {
  "@context"?: Record<string, object>;
  meta?: Record<string, object>;
  links?: Record<string, string>;
  /** @format int32 */
  totalPages?: number;
  features?: Feature[];
}

export interface Feature {
  type?: string;
  geometry?: Geometry;
  properties?: Properties;
}

export interface Geometry {
  type?: string;
  coordinates?: object[][][];
}

export interface Properties {
  nazwa_wska?: string;
  typ_wskaz?: string;
  /** @format int32 */
  rok?: number;
  /** @format double */
  wartosc?: number;
}

export interface ArchivalDataDto {
  "@context"?: Record<string, object>;
  "Lista archiwalnych wyników pomiarów"?: StationDataDTO[];
  meta?: Record<string, object>;
  links?: Record<string, string>;
  /** @format int32 */
  totalPages?: number;
}

export interface StationDataDTO {
  "Nazwa stacji"?: string;
  "Kod stanowiska"?: string;
  Data?: string;
  /** @format double */
  Wartość?: number;
}

export interface AqIndexMetaDTO {
  "@context"?: Record<string, object>;
  AqIndex?: StationAqIndexLdDTO;
  meta?: Record<string, object>;
  links?: Record<string, string>;
  /** @format int32 */
  totalPages?: number;
}

export interface StationAqIndexLdDTO {
  /** @format int64 */
  "Identyfikator stacji pomiarowej"?: number;
  "Data wykonania obliczeń indeksu"?: string;
  /** @format int64 */
  "Wartość indeksu"?: number;
  "Nazwa kategorii indeksu"?: string;
  "Data danych źródłowych, z których policzono wartość indeksu dla wskaźnika st"?: string;
  "Data wykonania obliczeń indeksu dla wskaźnika SO2"?: string;
  /** @format int64 */
  "Wartość indeksu dla wskaźnika SO2"?: number;
  "Nazwa kategorii indeksu dla wskażnika SO2"?: string;
  "Data danych źródłowych, z których policzono wartość indeksu dla wskaźnika SO2"?: string;
  "Data wykonania obliczeń indeksu dla wskaźnika NO2"?: string;
  /** @format int64 */
  "Wartość indeksu dla wskaźnika NO2"?: number;
  "Nazwa kategorii indeksu dla wskażnika NO2"?: string;
  "Data danych źródłowych, z których policzono wartość indeksu dla wskaźnika NO2"?: string;
  "Data wykonania obliczeń indeksu dla wskaźnika PM10"?: string;
  /** @format int64 */
  "Wartość indeksu dla wskaźnika PM10"?: number;
  "Nazwa kategorii indeksu dla wskażnika PM10"?: string;
  "Data danych źródłowych, z których policzono wartość indeksu dla wskaźnika PM10"?: string;
  "Data wykonania obliczeń indeksu dla wskaźnika PM2.5"?: string;
  /** @format int64 */
  "Wartość indeksu dla wskaźnika PM2.5"?: number;
  "Nazwa kategorii indeksu dla wskażnika PM2.5"?: string;
  "Data danych źródłowych, z których policzono wartość indeksu dla wskaźnika PM2.5"?: string;
  "Data wykonania obliczeń indeksu dla wskaźnika O3"?: string;
  /** @format int64 */
  "Wartość indeksu dla wskaźnika O3"?: number;
  "Nazwa kategorii indeksu dla wskażnika O3"?: string;
  "Data danych źródłowych, z których policzono wartość indeksu dla wskaźnika O3"?: string;
  "Status indeksu ogólnego dla stacji pomiarowej"?: boolean;
  "Kod zanieczyszczenia krytycznego"?: "PYL" | "OZON";
}

export interface AggregateDTO {
  Województwo?: string;
  "Kod stanowiska"?: string;
  Powiat?: string;
  Data?: string;
  /** @format double */
  "Maksimum ze średnich 8-godzinnych"?: number;
  /** @format double */
  "Średnia 24-godzinna z wyników 1-godzinnych"?: number;
}

export interface AggregatePM10DataDTO {
  "Lista danych zagregowanych"?: AggregateDTO[];
  meta?: Record<string, object>;
  links?: Record<string, string>;
  /** @format int32 */
  totalPages?: number;
  "@context"?: Record<string, object>;
}

export interface GetStatisticsParams {
  /**
   * Parametr mechanizmu stronicowania określający, którą stronę wyników chce pobrać użytkownik. Numer indeksu żądanej strony (liczony od zera). Domyślna wartość → 0.
   * @format int32
   * @min 0
   */
  page?: number;
  /**
   * Parametr mechanizmu stronicowania określający ilość wyników na stronie. Jest to dodatnia liczba całkowita podawana z kluczem parametru. Domyślna wartość → 20, Maksymalna wartość → 500.
   * @format int32
   * @min 1
   */
  size?: number;
  /** Parametr mechanizmu sortowania. Jako wartość przyjmuje nazwę atrybutu.                  Aby posortować w odwrotnej kolejności należy poprzedzić nazwę parametru znakiem minus. Parametr jest opcjonalny.  <br /> Domyślne sortowanie odbywa się rosnąco po atrybucie Województwo. <br /> Dostępne atrybuty:    <br /> Województwo - parametr dla nazwy województwa<br />  */
  sort?: string;
  /** SO2, NO2, NOx, CO, O3, C6H6, PM10, PM2,5, Pb(PM10), As(PM10), Cd(PM10), Ni(PM10), BaP(PM10), WWA(PM10), Jony(PM2,5), Hg(TGM), Formaldehyd, Depozycja */
  indicator: string;
  /** Województwo np. śląskie, kujawsko-pomorskie. Wartości parametrów należy oddzielać przecinkiem. */
  "filter[wojewodztwo]"?: string;
}

export type GetStatisticsData = StatisticsLdDTO;

export interface GetAutomaticAndManualSensorsParams {
  /**
   * Parametr mechanizmu stronicowania określający, którą stronę wyników chce pobrać użytkownik. Numer indeksu żądanej strony (liczony od zera). Domyślna wartość → 0.
   * @format int32
   * @min 0
   */
  page?: number;
  /**
   * Parametr mechanizmu stronicowania określający ilość wyników na stronie. Jest to dodatnia liczba całkowita podawana z kluczem parametru. Domyślna wartość → 20, Maksymalna wartość → 500.
   * @format int32
   * @min 1
   */
  size?: number;
  /** Parametr mechanizmu sortowania. Jako wartość przyjmuje nazwy atrybutu. Aby posortować w odwrotnej kolejności należy poprzedzić nazwę parametru znakiem minus. Parametr jest opcjonalny. Domyślne sortowanie odbywa się rosnąco po atrybucie Identyfikator stanowiska. Dostępne atrybuty: Id - parametr dla identyfikatora stanowiska */
  sort?: string;
  /**
   * Identyfikator stacji pomiarowej np. 52. Lista stacji i stanowisk pomiarowych wraz z ich id udostępniana jest poprzez usługi API 'Stacje pomiarowe i stanowiska pomiarowe'
   * @format int64
   */
  stationId: number;
}

export type GetAutomaticAndManualSensorsData = SensorLd;

export interface GetAutomaticAndManualStationParams {
  /**
   * Parametr mechanizmu stronicowania określający, którą stronę wyników chce pobrać użytkownik. Numer indeksu żądanej strony (liczony od zera). Domyślna wartość → 0.
   * @format int32
   * @min 0
   */
  page?: number;
  /**
   * Parametr mechanizmu stronicowania określający ilość wyników na stronie. Jest to dodatnia liczba całkowita podawana z kluczem parametru. Domyślna wartość → 20, Maksymalna wartość → 500.
   * @format int32
   * @min 1
   */
  size?: number;
  /** Parametr mechanizmu sortowania. Jako wartość przyjmuje nazwę atrybutu.                  Aby posortować w odwrotnej kolejności należy poprzedzić nazwę parametru znakiem minus. Parametr jest opcjonalny.  <br /> Domyślne sortowanie odbywa się rosnąco po atrybucie Identyfikator stacji<br /> Dostępne atrybuty:    <br /> Id - parametr dla identyfikatora stacji,<br />  */
  sort?: string;
}

export type GetAutomaticAndManualStationData = StationLd;

export interface GetStationMetadataParams {
  /**
   * Parametr mechanizmu stronicowania określający, którą stronę wyników chce pobrać użytkownik. Numer indeksu żądanej strony (liczony od zera). Domyślna wartość → 0.
   * @format int32
   * @min 0
   */
  page?: number;
  /**
   * Parametr mechanizmu stronicowania określający ilość wyników na stronie. Jest to dodatnia liczba całkowita podawana z kluczem parametru. Domyślna wartość → 20, Maksymalna wartość → 500.
   * @format int32
   * @min 1
   */
  size?: number;
  /** Parametr mechanizmu sortowania. Jako wartość przyjmuje nazwę atrybutu.                  Aby posortować w odwrotnej kolejności należy poprzedzić nazwę parametru znakiem minus. Parametr jest opcjonalny.  <br /> Domyślne sortowanie odbywa się rosnąco po atrybucie Kod stacji <br /> Dostępne atrybuty:    <br /> Kod - parametr dla Kodu stacji */
  sort?: string;
  /** Miejscowość np. Białka,Bielawa,Bogatynia,Brzeg Głogowski,Czarna Góra,Duszniki-Zdrój,Dzierżoniów . W przypadku wyboru dwóch należy oddzielić je znakiem przecinka (,) */
  "filter[miejscowosc]"?: string;
  /** Kod stacji np. DsBialka, DsBielGrot, DsBogChop, DsBoleslaMOB. W przypadku wyboru kilku kodów stacji należy oddzielić je znakiem przecinka (,) */
  "filter[kod-stacji]"?: string;
}

export type GetStationMetadataData = StationMetaDataLdDTO;

export interface GetSensorsMetadataParams {
  /**
   * Parametr mechanizmu stronicowania określający, którą stronę wyników chce pobrać użytkownik. Numer indeksu żądanej strony (liczony od zera). Domyślna wartość → 0.
   * @format int32
   * @min 0
   */
  page?: number;
  /**
   * Parametr mechanizmu stronicowania określający ilość wyników na stronie. Jest to dodatnia liczba całkowita podawana z kluczem parametru. Domyślna wartość → 20, Maksymalna wartość → 500.
   * @format int32
   * @min 1
   */
  size?: number;
  /** Parametr mechanizmu sortowania. Jako wartość przyjmuje nazwę atrybutu.                  Aby posortować w odwrotnej kolejności należy poprzedzić nazwę parametru znakiem minus. Parametr jest opcjonalny.  <br /> Domyślne sortowanie odbywa się rosnąco po atrybucie Kod stacji <br /> Dostępne atrybuty:    <br /> Kod - parametr dla Kodu stacji */
  sort?: string;
  /** Typ pomiaru: automatyczny lub manualny. W przypadku wyboru dwóch należy oddzielić je znakiem przecinka (,) */
  "filter[typ-pomiaru]"?: string;
  /** Kod stacji np. DsBialka, DsBielGrot, DsBogChop, DsBoleslaMOB. W przypadku wyboru kilku kodów stacji należy oddzielić je znakiem przecinka (,) */
  "filter[kod-stacji]"?: string;
}

export type GetSensorsMetadataData = SensorMetaDataLdDTO;

export interface GetInformationAboutExceedingParams {
  /**
   * Parametr mechanizmu stronicowania określający, którą stronę wyników chce pobrać użytkownik. Numer indeksu żądanej strony (liczony od zera). Domyślna wartość → 0.
   * @format int32
   * @min 0
   */
  page?: number;
  /**
   * Parametr mechanizmu stronicowania określający ilość wyników na stronie. Jest to dodatnia liczba całkowita podawana z kluczem parametru. Domyślna wartość → 20, Maksymalna wartość → 500.
   * @format int32
   * @min 1
   */
  size?: number;
  /** Parametr mechanizmu sortowania. Jako wartość przyjmuje nazwę atrybutu.                  Aby posortować w odwrotnej kolejności należy poprzedzić nazwę parametru znakiem minus. Parametr jest opcjonalny. Domyśle sortowanie odbywa się malejąco po  parametrze Data i godzina.<br /> Dostępne atrybuty:    <br /> Województwo - parametr dla nazwy województwa.<br />Data - parametr dla Data i godzina */
  sort?: string;
  /** Województwo np. ŚLĄSKIE, WARMIŃSKO-MAZURSKIE, KUJAWSKO-POMORSKIE, MAŁOPOLSKIE. W przypadku wyboru kilku województw należy oddzielić je znakiem przecinka (,) */
  "filter[wojewodztwo]"?: string;
}

export type GetInformationAboutExceedingData = ExceedingLdDTO;

export interface GetDataParams {
  /**
   * Parametr mechanizmu stronicowania określający, którą stronę wyników chce pobrać użytkownik. Numer indeksu żądanej strony (liczony od zera). Domyślna wartość → 0.
   * @format int32
   * @min 0
   */
  page?: number;
  /**
   * Parametr mechanizmu stronicowania określający ilość wyników na stronie. Jest to dodatnia liczba całkowita podawana z kluczem parametru. Domyślna wartość → 20, Maksymalna wartość → 500.
   * @format int32
   * @min 1
   */
  size?: number;
  /**
   * Parametr mechanizmu sortowania. Jako wartość przyjmuje nazwę atrybutu. Aby posortować w odwrotnej kolejności należy poprzedzić nazwę atrybutu znakiem minus. Parametr jest opcjonalny.
   * Domyślne sortowanie odbywa się malejąco po atrybucie Data.
   * Dostępne atrybuty:
   * Data - parametr dla daty,
   */
  sort?: string;
  /**
   * Identyfikator stanowiska np. 52
   * Lista stacji i stanowisk pomiarowych wraz z ich id udostępniana jest poprzez usługi API "Stacje pomiarowe i stanowiska pomiarowe”
   * @format int64
   */
  idSensor: number;
}

export type GetDataData = CurrentDataDTO;

export interface GetDistributionsOfConcentrationsMapParams {
  /**
   * Rok - dostępne są dane od 2019 roku
   * @format int32
   */
  year: number;
  /** Typ wskaźnika: OZ - Ochrona zdrowia, OR - Ochrona roślin */
  indicatorType: string;
  /** Wskaźnik ochrona zdrowia (OZ): PM10_sr_roczna, PM25_sr_roczna, NO2_sr_roczna, O3_3letnia, BaP_sr_roczna, SO2_25h_max, PM10_36_max, NO2_19h_max, SO2_4_max </br>Wskaźnik ochrona roślin (OR): SO2_sr_roczna, NOx_sr_roczna, O3_5letnia */
  indicator: string;
}

export type GetDistributionsOfConcentrationsMapData =
  ConcentrationDistributionsDTO;

export interface GetDataForAllStationsByYearAndVoivodeshipParams {
  /**
   * Parametr mechanizmu stronicowania określający, którą stronę wyników chce pobrać użytkownik. Numer indeksu żądanej strony (liczony od zera). Domyślna wartość → 0.
   * @format int32
   * @min 0
   */
  page?: number;
  /**
   * Parametr mechanizmu stronicowania określający ilość wyników na stronie. Jest to dodatnia liczba całkowita podawana z kluczem parametru. Domyślna wartość → 20, Maksymalna wartość → 500.
   * @format int32
   * @min 1
   */
  size?: number;
  /** Parametr mechanizmu sortowania. Jako wartość przyjmuje nazwę atrybutu.                  Aby posortować w odwrotnej kolejności należy poprzedzić nazwę atrybutu znakiem minus. Parametr jest opcjonalny. <br />Domyślne sortowanie odbywa się rosnąco po atrybutach Kod stanowiska oraz Data. <br /> Dostępne atrybuty:    <br /> Data - parametr dla daty, <br />Kod - parametr dla kodu stanowiska  */
  sort?: string;
  /** Rok, np. 2020. */
  year: string;
  /** Województwo, np. ŚLĄSKIE, WARMIŃSKO-MAZURSKIE, KUJAWSKO-POMORSKIE, MAŁOPOLSKIE. */
  voivodeship: string;
  /**
   * Dostępne zanieczyszczenia: 123trimetylobenzen, 124trimetylobenzen, 135trimetylobenzen, 13butadien, 1buten, 1penten, 2penten, As(PM10), As(cdepoz), BaA(PM10), BaA(cdepoz), BaP(PM10), BaP(cdepoz), BbF(PM10), BbF(cdepoz), BjF(PM10), BjF(cdepoz), BkF(PM10),
   * BkF(cdepoz), C6H6, CO, Ca2+(PM2.5), Cd(PM10), Cd(cdepoz), Cl_(PM2.5), Cr(PM10), Cu(PM10), DBahA(PM10), DBahA(cdepoz), EC(PM2.5), HCl,
   * Hg(TGM), Hg(cdepoz), IP(PM10), IP(cdepoz), K+(PM2.5), Mg2+(PM2.5), NH3, NH4+(PM2.5), NO, NO2, NO3_(PM2.5), NOx,Na+(PM2.5), Ni(PM10),
   * Ni(cdepoz), O3,OC(PM2.5), PM10, PM2.5, Pb(PM10), SO2, SO42_(PM2.5), acetylen, cis2buten, etan, etylen, etylobenzen, formaldehyd, ibutan, iheksan, ioktan, ipentan, izopren, ksylen, mpksylen, nbutan, nheksan, nheptan, noktan, npentan, oksylen, propan, propen, toluen, trans2buten
   */
  pollution?: string;
}

export type GetDataForAllStationsByYearAndVoivodeshipData = ArchivalDataDto;

export interface GetArchivalDataForAllStationsParams {
  /**
   * Parametr mechanizmu stronicowania określający, którą stronę wyników chce pobrać użytkownik. Numer indeksu żądanej strony (liczony od zera). Domyślna wartość → 0.
   * @format int32
   * @min 0
   */
  page?: number;
  /**
   * Parametr mechanizmu stronicowania określający ilość wyników na stronie. Jest to dodatnia liczba całkowita podawana z kluczem parametru. Domyślna wartość → 20, Maksymalna wartość → 500.
   * @format int32
   * @min 1
   */
  size?: number;
  /** Parametr mechanizmu sortowania. Jako wartość przyjmuje nazwę atrybutu.                  Aby posortować w odwrotnej kolejności należy poprzedzić nazwę atrybutu znakiem minus. Parametr jest opcjonalny. <br />Domyślne sortowanie odbywa się rosnąco po atrybutach Kod stanowiska oraz Data. <br /> Dostępne atrybuty:    <br /> Data - parametr dla daty, <br />Kod - parametr dla kodu stanowiska  */
  sort?: string;
  /**
   * Data od:
   * należy określić datę uwzględniając dni i godziny zgodnie z przykładem: 2022-02-23 15:00
   */
  dateFrom?: string;
  /**
   * Data do:
   * należy określić datę uwzględniając dni i godziny zgodnie z przykładem: 2022-02-25 11:00
   */
  dateTo?: string;
  /** Liczba dni wstecz od dnia dzisiejszego np. 5 (dzień rozumiany jako 24 godziny wstecz od wywołania usługi) */
  dayNumber?: string;
}

export type GetArchivalDataForAllStationsData = ArchivalDataDto;

export interface GetArchivalDataBySensorParams {
  /**
   * Parametr mechanizmu stronicowania określający, którą stronę wyników chce pobrać użytkownik. Numer indeksu żądanej strony (liczony od zera). Domyślna wartość → 0.
   * @format int32
   * @min 0
   */
  page?: number;
  /**
   * Parametr mechanizmu stronicowania określający ilość wyników na stronie. Jest to dodatnia liczba całkowita podawana z kluczem parametru. Domyślna wartość → 20, Maksymalna wartość → 500.
   * @format int32
   * @min 1
   */
  size?: number;
  /** Parametr mechanizmu sortowania. Jako wartość przyjmuje nazwę atrybutu.                  Aby posortować w odwrotnej kolejności należy poprzedzić nazwę atrybutu znakiem minus. Parametr jest opcjonalny. <br />Domyślne sortowanie odbywa się malejąco po atrybucie Data. <br /> Dostępne atrybuty:    <br /> Data - parametr dla daty <br />  */
  sort?: string;
  /** Data od:                                             <br />- dla stanowisk automatycznych (wyniki jednogodzinne ) należy określić datę uwzględniając dni i godziny zgodnie z przykładem: 2022-02-23 15:00  <br /> - dla stanowisk manualnych (wyniki średniodobowe) należy określić datę uwzględniając dni zgodnie z przykładem: 2022-02-23 00:00  */
  dateFrom?: string;
  /** Data do:                                                                   <br />- dla stanowisk automatycznych (wyniki jednogodzinne ) należy określić datę uwzględniając dni i godziny zgodnie z przykładem: 2022-02-25 11:00  <br />- dla stanowisk manualnych (wyniki średniodobowe) należy określić datę uwzględniając dni zgodnie z przykładem: 2022-02-25 00:00 */
  dateTo?: string;
  /** Liczba dni wstecz od dnia dzisiejszego np. 5 (dzień rozumiany jako 24 godziny wstecz od wywołania usługi) */
  dayNumber?: string;
  /**
   * Identyfikator stanowiska np. 52                <br/> Lista stacji i stanowisk pomiarowych wraz z ich id udostępniana jest poprzez usługi API "Stacje pomiarowe i stanowiska pomiarowe”
   * @format int64
   */
  idSensor: number;
}

export type GetArchivalDataBySensorData = ArchivalDataDto;

export interface GetIndexParams {
  /**
   * Parametr mechanizmu stronicowania określający, którą stronę wyników chce pobrać użytkownik. Numer indeksu żądanej strony (liczony od zera). Domyślna wartość → 0.
   * @format int32
   * @min 0
   */
  page?: number;
  /**
   * Parametr mechanizmu stronicowania określający ilość wyników na stronie. Jest to dodatnia liczba całkowita podawana z kluczem parametru. Domyślna wartość → 20, Maksymalna wartość → 500.
   * @format int32
   * @min 1
   */
  size?: number;
  /** Parametr mechanizmu sortowania. Jako wartość przyjmuje nazwę atrybutu. Aby posortować w odwrotnej kolejności należy poprzedzić nazwę parametru znakiem minus. Parametr jest opcjonalny. */
  sort?: string;
  /**
   * Identyfikator stacji pomiarowej np. 52 <br/> Lista stacji i stanowisk pomiarowych wraz z ich id udostępniana jest poprzez usługi API "Stacje pomiarowe i stanowiska pomiarowe”
   * @format int32
   */
  stationId: number;
}

export type GetIndexData = AqIndexMetaDTO;

export interface GetAggregatePm10DataParams {
  /**
   * Parametr mechanizmu stronicowania określający, którą stronę wyników chce pobrać użytkownik. Numer indeksu żądanej strony (liczony od zera). Domyślna wartość → 0.
   * @format int32
   * @min 0
   */
  page?: number;
  /**
   * Parametr mechanizmu stronicowania określający ilość wyników na stronie. Jest to dodatnia liczba całkowita podawana z kluczem parametru. Domyślna wartość → 20, Maksymalna wartość → 500.
   * @format int32
   * @min 1
   */
  size?: number;
  /** Parametr mechanizmu sortowania. Jako wartość przyjmuje nazwę atrybutu.                  Aby posortować w odwrotnej kolejności należy poprzedzić nazwę atrybutu znakiem minus. Parametr jest opcjonalny. <br />Domyślne sortowanie odbywa się rosnąco po atrybutach Kod stanowiska oraz Data. <br /> Dostępne atrybuty:    <br /> Województwo - parametr dla nazwy województwa, <br /> Powiat - parametr dla nazwy powiatu  */
  sort?: string;
  /** Powiat np. Katowice, Zabrze, Bielsko-Biała,  Warszawa, limanowski, ostrołęcki, olkuski. W przypadku wyboru kilku powiatów należy oddzielić je znakiem przecinka (,) */
  "filter[powiat]"?: string;
  /** Województwo np. ŚLĄSKIE, WARMIŃSKO-MAZURSKIE, KUJAWSKO-POMORSKIE, MAŁOPOLSKIE. W przypadku wyboru kilku województw należy oddzielić je znakiem przecinka (,) */
  "filter[wojewodztwo]"?: string;
}

export type GetAggregatePm10DataData = AggregatePM10DataDTO;

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api.gios.gov.pl/pjp-api";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) => {
      if (input instanceof FormData) {
        return input;
      }

      return Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData());
    },
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const responseToParse = responseFormat ? response.clone() : response;
      const data = !responseFormat
        ? r
        : await responseToParse[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Interfejs programistyczny aplikacji (API)
 * @version 1.0.0
 * @baseUrl https://api.gios.gov.pl/pjp-api
 * @contact API - GŁÓWNY INSPEKTORAT OCHRONY ŚRODOWISKA <api@gios.gov.pl>
 *
 * <img  alt ='logo' src = /pjp-api/images/logo.jpg>
 *
 * <b>Utworzenie usług API portalu Jakość Powietrza Głównego Inspektoratu Ochrony Środowiska sfinansowano ze środków Narodowego Funduszu Ochrony Środowiska i Gospodarki Wodnej.</b>
 *
 * Interfejs API portalu Jakość Powietrza GIOŚ umożliwia dostęp do danych dotyczących jakości powietrza w Polsce, wytwarzanych w ramach Państwowego Monitoringu Środowiska i gromadzonych w systemie informatycznym EKOINFONET. Udostępniane dane mogą ulegać zmianie w późniejszym czasie.
 *
 * Korzystając z API akceptują Państwo warunki zawarte w Regulaminie portalu. Użytkownik ponownie wykorzystujący informacje sektora publicznego udostępniane na portalu Jakość Powietrza zobowiązany jest w sposób czytelny i wyraźny wskazać źródło pozyskania informacji.
 *
 * Poniższa lista opisuje usługi sieciowe API GIOŚ w standardzie REST wykorzystujące zapytanie HTTP GET. Dane udostępniane są w formacie JSON-LD.
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  v1 = {
    /**
     * @description Usługa sieciowa udostępniająca statystyki roczne od roku 2000 dla SO2, NO2, NOx, CO, O3, C6H6, PM10, PM2,5, Pb(PM10), As(PM10), Cd(PM10), Ni(PM10), BaP(PM10), WWA(PM10), Jony(PM2,5), Hg(TGM), formaldehyd, depozycja, wraz z ich parametrami https://api.gios.gov.pl/pjp-api/v1/rest/statistics/getStatisticsForPollutants. Usługa sieciowa typu REST wykorzystująca zapytanie HTTP GET. Udostępniająca dane w formacie JSON-LD. Przykład zapytania: https://api.gios.gov.pl/pjp-api/v1/rest/statistics/getStatisticsForPollutants?indicator=O3
     *
     * @tags Statystyki roczne
     * @name GetStatistics
     * @request GET:/v1/rest/statistics/getStatisticsForPollutants
     */
    getStatistics: (query: GetStatisticsParams, params: RequestParams = {}) =>
      this.request<GetStatisticsData, DataException>({
        path: `/v1/rest/statistics/getStatisticsForPollutants`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Usługa sieciowa udostępniająca listę stanowisk pomiarowych dostępnych na wybranej stacji pomiarowej. https://api.gios.gov.pl/pjp-api/v1/rest/station/sensors/{stationId}. Usługa sieciowa typu REST wykorzystująca zapytanie HTTP GET. Udostępniająca dane w formacie JSON-LD. Przykład zapytania: https://api.gios.gov.pl/pjp-api/v1/rest/station/sensors/52
     *
     * @tags Stacje pomiarowe i stanowiska pomiarowe
     * @name GetAutomaticAndManualSensors
     * @summary Pobierz listę czujników stacji pomiarowej
     * @request GET:/v1/rest/station/sensors/{stationId}
     */
    getAutomaticAndManualSensors: (
      { stationId, ...query }: GetAutomaticAndManualSensorsParams,
      params: RequestParams = {},
    ) =>
      this.request<GetAutomaticAndManualSensorsData, DataException>({
        path: `/v1/rest/station/sensors/${stationId}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Usługa sieciowa udostępniająca listę stacji pomiarowych https://api.gios.gov.pl/pjp-api/v1/rest/station/findAll. Usługa sieciowa typu REST wykorzystująca zapytanie HTTP GET. Udostępniająca dane w formacie JSON-LD. Przykład zapytania: https://api.gios.gov.pl/pjp-api/v1/rest/station/findAll
     *
     * @tags Stacje pomiarowe i stanowiska pomiarowe
     * @name GetAutomaticAndManualStation
     * @summary Pobierz listę stacji pomiarowych
     * @request GET:/v1/rest/station/findAll
     */
    getAutomaticAndManualStation: (
      query: GetAutomaticAndManualStationParams,
      params: RequestParams = {},
    ) =>
      this.request<GetAutomaticAndManualStationData, DataException>({
        path: `/v1/rest/station/findAll`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Usługa sieciowa udostępniająca metadane stacji pomiarowych: kod stacji, międzynarodowy kod stacji, nazwa stacji, stary kod stacji, data uruchomienia, data zamknięcia, typ stacji, typ obszaru, rodzaj stacji, województwo, miejscowość, ulica, współrzędne geograficzne (WGS84 φ N, WGS84 λ E) https://api.gios.gov.pl/pjp-api/v1/rest/metadata/stations. Usługa sieciowa typu REST wykorzystująca zapytanie HTTP GET. Udostępniająca dane w formacie JSON-LD. Przykład zapytania: https://api.gios.gov.pl/pjp-api/v1/rest/metadata/stations
     *
     * @tags Metadane
     * @name GetStationMetadata
     * @request GET:/v1/rest/metadata/stations
     */
    getStationMetadata: (
      query: GetStationMetadataParams,
      params: RequestParams = {},
    ) =>
      this.request<GetStationMetadataData, DataException>({
        path: `/v1/rest/metadata/stations`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Usługa sieciowa udostępniająca metadane stanowisk pomiarowych: kod stanowiska, kod stacji, nazwa stacji, stary kod stacji, wskaźnik – kod, wskaźnik, czas uśredniania, typ pomiaru, data uruchomienia, data zamknięcia, województwo, nazwa strefy https://api.gios.gov.pl/pjp-api/v1/rest/metadata/sensors. Usługa sieciowa typu REST wykorzystująca zapytanie HTTP GET. Udostępniająca dane w formacie JSON-LD. Przykład zapytania: https://api.gios.gov.pl/pjp-api/v1/rest/metadata/sensors
     *
     * @tags Metadane
     * @name GetSensorsMetadata
     * @request GET:/v1/rest/metadata/sensors
     */
    getSensorsMetadata: (
      query: GetSensorsMetadataParams,
      params: RequestParams = {},
    ) =>
      this.request<GetSensorsMetadataData, DataException>({
        path: `/v1/rest/metadata/sensors`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Usługa sieciowa udostępniająca aktywne informacje o przekroczeniu poziomu informowania, alarmowego, dopuszczalnego i docelowego zanieczyszczeń https://api.gios.gov.pl/pjp-api/v1/rest/levels/getInformationAboutExceeding. Usługa sieciowa typu REST wykorzystująca zapytanie HTTP GET. Udostępniająca dane w formacie JSON-LD. Przykład zapytania: https://api.gios.gov.pl/pjp-api/v1/rest/levels/getInformationAboutExceeding
     *
     * @tags Informacje o przekroczeniu
     * @name GetInformationAboutExceeding
     * @summary Pobierz informacje o przekroczeniach
     * @request GET:/v1/rest/levels/getInformationAboutExceeding
     */
    getInformationAboutExceeding: (
      query: GetInformationAboutExceedingParams,
      params: RequestParams = {},
    ) =>
      this.request<GetInformationAboutExceedingData, DataException>({
        path: `/v1/rest/levels/getInformationAboutExceeding`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Usługa sieciowa udostępniająca dane pomiarowe na podstawie podanego identyfikatora stanowiska pomiarowego typu automatycznego. Dla stanowiska typu manualnego wyniki pomiarów nie są dostępne na bieżąco, są one udostępniane po 4-8 tygodniach od poboru próby przez usługę API „Archiwalne dane pomiarowe” https://api.gios.gov.pl/pjp-api/v1/rest/data/getData/{idSensor}. Usługa sieciowa typu REST wykorzystująca zapytanie HTTP GET. Udostępniająca dane w formacie JSON-LD. Przykład zapytania: https://api.gios.gov.pl/pjp-api/v1/rest/data/getData/52
     *
     * @tags Bieżące dane pomiarowe
     * @name GetData
     * @summary Usługa sieciowa udostępniająca dane pomiarowe w formacie JSON-LD.
     * @request GET:/v1/rest/data/getData/{idSensor}
     */
    getData: (
      { idSensor, ...query }: GetDataParams,
      params: RequestParams = {},
    ) =>
      this.request<GetDataData, DataException>({
        path: `/v1/rest/data/getData/${idSensor}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Usługa sieciowa udostępniająca dane prezentowane na mapach rozkładów stężeń z wybranego roku kalendarzowego, dla wybranego zanieczyszczenia, w podziale na kryterium ochrony zdrowia i ochrony roślin. https://api.gios.gov.pl/pjp-api/v1/rest/concentration/getDistributionsOfConcentrationsMap. Usługa sieciowa typu REST wykorzystująca zapytanie HTTP GET. Udostępniająca plik do pobrania, zawierający dane w formacie JSON-LD. Przykład zapytania: https://api.gios.gov.pl/pjp-api/v1/rest/concentration/getDistributionsOfConcentrationsMap?year=2020&indicatorType=OZ&indicator=PM10_sr_roczna
     *
     * @tags Mapy rozkładów stężeń zanieczyszczeń
     * @name GetDistributionsOfConcentrationsMap
     * @request GET:/v1/rest/concentration/getDistributionsOfConcentrationsMap
     */
    getDistributionsOfConcentrationsMap: (
      query: GetDistributionsOfConcentrationsMapParams,
      params: RequestParams = {},
    ) =>
      this.request<GetDistributionsOfConcentrationsMapData, DataException>({
        path: `/v1/rest/concentration/getDistributionsOfConcentrationsMap`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Usługa sieciowa udostępniająca archiwalne wyniki pomiarów automatycznych i manualnych z wybranego roku kalendarzowego (również trwającego), dla wybranego zanieczyszczenia lub wszystkich łącznie, ze wszystkich stacji w wybranym województwie https://api.gios.gov.pl/pjp-api/v1/rest/archivalData/getDataForAllStationsByYearAndVoivodeship. Usługa sieciowa typu REST wykorzystująca zapytanie HTTP GET. Udostępniająca dane w formacie JSON-LD. Przykład zapytania: https://api.gios.gov.pl/pjp-api/v1/rest/archivalData/getDataForAllStationsByYearAndVoivodeship?year=2021&voivodeship=ŚLĄSKIE
     *
     * @tags Archiwalne dane pomiarowe
     * @name GetDataForAllStationsByYearAndVoivodeship
     * @request GET:/v1/rest/archivalData/getDataForAllStationsByYearAndVoivodeship
     */
    getDataForAllStationsByYearAndVoivodeship: (
      query: GetDataForAllStationsByYearAndVoivodeshipParams,
      params: RequestParams = {},
    ) =>
      this.request<
        GetDataForAllStationsByYearAndVoivodeshipData,
        DataException
      >({
        path: `/v1/rest/archivalData/getDataForAllStationsByYearAndVoivodeship`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Usługa sieciowa udostępniająca archiwalne wyniki pomiarów automatycznych i manualnych ze wszystkich stacji w kraju dla dowolnego wybranego okresu czasu (max. 31 dni). Należy wybrać zakres czasu: Data od i Data do lub Liczba dni wstecz od https://api.gios.gov.pl/pjp-api/v1/rest/archivalData/getDataForAllStations. Usługa sieciowa typu REST wykorzystująca zapytanie HTTP GET. Udostępniająca dane w formacie JSON-LD. Przykład zapytania: https://api.gios.gov.pl/pjp-api/v1/rest/archivalData/getDataForAllStations?dayNumber=2
     *
     * @tags Archiwalne dane pomiarowe
     * @name GetArchivalDataForAllStations
     * @request GET:/v1/rest/archivalData/getDataForAllStations
     */
    getArchivalDataForAllStations: (
      query: GetArchivalDataForAllStationsParams,
      params: RequestParams = {},
    ) =>
      this.request<GetArchivalDataForAllStationsData, DataException>({
        path: `/v1/rest/archivalData/getDataForAllStations`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Usługa sieciowa udostępniająca archiwalne wyniki pomiarów automatycznych i manualnych na podstawie podanego identyfikatora stanowiska pomiarowego dla dowolnego wybranego okresu czasu (max. 366 dni). Należy podać identyfikator stanowiska oraz wybrać zakres czasu: Data od i Data do lub Liczba dni wstecz od https://api.gios.gov.pl/pjp-api/v1/rest/archivalData/getDataBySensor/{idSensor}. Usługa sieciowa typu REST wykorzystująca zapytanie HTTP GET. Udostępniająca dane w formacie JSON-LD. Przykład zapytania: https:///api.gios.gov.pl/pjp-api/v1/rest/archivalData/getDataBySensor/52?dayNumber=3
     *
     * @tags Archiwalne dane pomiarowe
     * @name GetArchivalDataBySensor
     * @request GET:/v1/rest/archivalData/getDataBySensor/{idSensor}
     */
    getArchivalDataBySensor: (
      { idSensor, ...query }: GetArchivalDataBySensorParams,
      params: RequestParams = {},
    ) =>
      this.request<GetArchivalDataBySensorData, DataException>({
        path: `/v1/rest/archivalData/getDataBySensor/${idSensor}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Usługa sieciowa udostępniająca indeks jakości powietrza na podstawie podanego identyfikatora stacji pomiarowej. https://api.gios.gov.pl/pjp-api/v1/rest/aqindex/getIndex/{stationId} Usługa sieciowa typu REST wykorzystująca zapytanie HTTP GET. Udostępniająca dane w formacie JSON-LD. Przykład zapytania: https://api.gios.gov.pl/pjp-api/v1/rest/aqindex/getIndex/52
     *
     * @tags Indeks jakości powietrza
     * @name GetIndex
     * @request GET:/v1/rest/aqindex/getIndex/{stationId}
     */
    getIndex: (
      { stationId, ...query }: GetIndexParams,
      params: RequestParams = {},
    ) =>
      this.request<GetIndexData, DataException>({
        path: `/v1/rest/aqindex/getIndex/${stationId}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Usługa sieciowa udostępniająca agregaty ze stanowisk automatycznych za 3 ostatnie doby w podziale na województwa i powiaty: 1. Agregat Maksimum ze średnich 8-godzinnych z 1-godzinnych wyników pomiarów pyłu zawieszonego PM10; 2. Agregat Średnia 24-godzinna z 1-godzinnych wyników pomiarów pyłu zawieszonego PM10 https://api.gios.gov.pl/pjp-api/v1/rest/aggregate/getAggregatePm10Data. Usługa sieciowa typu REST wykorzystująca zapytanie HTTP GET. Udostępniająca dane w formacie JSON-LD. Przykład zapytania: https://api.gios.gov.pl/pjp-api/v1/rest/aggregate/getAggregatePm10Data
     *
     * @tags Agregaty pomiarów
     * @name GetAggregatePm10Data
     * @request GET:/v1/rest/aggregate/getAggregatePm10Data
     */
    getAggregatePm10Data: (
      query: GetAggregatePm10DataParams,
      params: RequestParams = {},
    ) =>
      this.request<GetAggregatePm10DataData, DataException>({
        path: `/v1/rest/aggregate/getAggregatePm10Data`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
}
