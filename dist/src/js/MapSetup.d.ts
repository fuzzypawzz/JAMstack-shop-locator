/// <reference types="google.maps" />
interface IConfiguration {
    autocomplete?: boolean;
}
export default class MapSetup {
    private copenhagen;
    private markerStorage;
    private map;
    private infoWindow;
    private wrapperForMapId;
    private activateAutocomplete;
    constructor(config: IConfiguration);
    setup(): Promise<void>;
    /**
     * Initiates the map with a custom configuration
     */
    initMap(): void;
    private contructLatLngObject;
    clickMarker(marker: google.maps.Marker): void;
    private handleShopDataList;
    private contructMarker;
    private saveMarker;
}
export {};
