// DOCS: https://developers.google.com/maps/documentation/javascript/using-typescript

import getClone from "./helpers/getClone";
import http from "./helpers/http";
import { IHttpResponse } from "./helpers/http";

interface IConfiguration {
	autocomplete?: boolean;
}

interface IShopData {
	name: string;
	street: string;
	houseNumber?: string;
	city: string;
	zipcode: number;
	phoneNumber?: number;
	id?: string;
	lat: number;
	lng: number;
}

export default class MapSetup {
	private copenhagen: google.maps.LatLngLiteral = {
		lat: 55.6959315,
		lng: 12.4609883,
	};
	private markerStorage: Array<any> = [];
	private map: google.maps.Map;
	private infoWindow: google.maps.InfoWindow;
	private wrapperForMapId: string = "mapDiv";
	private activateAutocomplete: boolean = false;

	constructor(config: IConfiguration) {
		this.activateAutocomplete = config.autocomplete;
	}

	public async setup(): Promise<void> {
		this.infoWindow = new google.maps.InfoWindow();
		this.initMap(); // Setup the map
		let response: IHttpResponse<IShopData[]>;
		try {
			response = await http<IShopData[]>(
				"https://getstoresfunction20210216205929.azurewebsites.net/api/GetStores"
			);
			console.log(response);
			this.handleShopDataList(response.parsedBody)
		} catch (response) {
			console.log("There was an Error: ", response);
		}
	}

	/**
	 * Initiates the map with a custom configuration
	 */
	public initMap(): void {
		const centerLatLng: google.maps.LatLngLiteral = this.copenhagen;
		const wrapperId: string = this.wrapperForMapId;

		this.map = new google.maps.Map(
			document.getElementById(wrapperId) as HTMLElement,
			{
				center: centerLatLng,
				zoom: 11,
				disableDefaultUI: true,
				zoomControl: true,
				clickableIcons: false,
				styles: [
					{
						featureType: "poi.business",
						stylers: [{ visibility: "off" }],
					},
					{
						featureType: "transit",
						stylers: [{ visibility: "on" }],
					},
				],
			}
		);
	}

	private contructLatLngObject(
		lat: string | number,
		lng: string | number
	): { lat: number; lng: number } {
		const latLng: google.maps.LatLngLiteral = {
			lat: parseFloat(lat as string),
			lng: parseFloat(lng as string),
		};
		return latLng;
	}

	public clickMarker(marker: google.maps.Marker) {
		google.maps.event.trigger(marker, "click");
	}

	// TOOD: Need to find out if all the shop data should be on the marker itself
	private handleShopDataList(shopDataList: IShopData[]): void {
		shopDataList.forEach((shop: IShopData) => {
			const latLngObject: google.maps.LatLngLiteral = this.contructLatLngObject(
				shop.lat,
				shop.lng
			);
			this.contructMarker(latLngObject, shop.id);
		});
	}

	private contructMarker(
		latLng: google.maps.LatLngLiteral,
		markerId: string
	): google.maps.Marker {
		const marker = new google.maps.Marker({
			position: latLng,
			map: this.map,
			//id: `marker_${markerId}`,
		});

		function addClickHandler(marker: google.maps.Marker) {
			marker.addListener("click", function () {
				const listItemRadio = document
					.querySelector(`#${this.id}`)
					.querySelector("input");
				listItemRadio.checked = true;

				const infoWindowContent = getClone(`popup_${markerId}`);
				this.infoWindow.setContent(infoWindowContent);
				this.infoWindow.setPosition(latLng);
				this.infoWindow.setOptions({
					// Display infowindow correctly relatively to the marker position
					pixelOffset: new google.maps.Size(0, -30),
				});
				this.map.setZoom(15);
				this.infoWindow.open(this.map);
				this.map.setCenter(latLng);
			});
		}

		addClickHandler(marker);
		this.saveMarker(marker);
		return marker;
	}

	private saveMarker(marker: google.maps.Marker) {
		this.markerStorage.push(marker);
	}
}
