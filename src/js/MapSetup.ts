// DOCS: https://developers.google.com/maps/documentation/javascript/using-typescript

import getClone from "./helpers/getClone";
import http from "./helpers/http";
import { IHttpResponse } from "./helpers/http";
import { template as listItemTemplate } from "../templates/_list-item";

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
		let responseMock: any;
		try {
			// response = await http<IShopData[]>(
			// 	"https://getstoresfunction20210216205929.azurewebsites.net/api/GetStores"
			// );
			responseMock = [
				{
					name: "Cphbusiness ved Søerne",
					street: "Nansensgade",
					houseNumber: 19,
					zipCode: 1366,
					city: "København",
					phoneNumber: 36154501,
					lat: "55.68204709239865",
					lng: "12.562809042571491",
					id: "34324",
				},
				{
					name: "Cphbusiness Nørrebro",
					street: "Blågårdsgade",
					houseNumber: 23,
					zipCode: 2200,
					city: "København N",
					phoneNumber: 36154501,
					lat: "55.687036666310156",
					lng: "12.559322146721001",
					id: "34224",
				},
				{
					name: "Cphbusiness Lyngby",
					street: "Nørgaardsvej",
					houseNumber: 30,
					zipCode: 2800,
					city: "Kongens Lyngby",
					phoneNumber: 36154501,
					lat: "55.770911361721794",
					lng: "12.511768553967515",
					id: "732842",
				},
				{
					name: "MinTestButik",
					street: "demostreet",
					houseNumber: 99,
					zipCode: 0,
					city: "København",
					phoneNumber: 99999999,
					lat: "59.22321412",
					lng: "12.24342324",
					id: "3248222",
				},
				{
					name: "Telia Holmbladsgade",
					street: "Holmbladsgade",
					houseNumber: 139,
					zipCode: 2300,
					city: "København S",
					phoneNumber: 99999999,
					lat: "59.22321412",
					lng: "12.24342324",
					id: "3849232",
				},
				{
					name: "Telia Frederiksberg",
					street: "frederiksberggade",
					houseNumber: 139,
					zipCode: 2300,
					city: "Frederiksberg",
					phoneNumber: 99999999,
					lat: "59.22321412",
					lng: "12.24342324",
					id: "2421",
				},
			];
			console.log(response);
			//this.handleShopDataList(response.parsedBody)
			this.handleShopDataList(responseMock);
			this.createShopItemList(responseMock);
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

	private createShopItemList(shopDataList: IShopData[]): void {
		let listTemplate: string = listItemTemplate({
			entries: shopDataList,
		});
		this.updateDOM(
			listItemTemplate({
				entries: shopDataList,
			}),
			"listofstores"
		);
	}

	private updateDOM(html: string, targetId: string): void {
		// TODO: Refactor this
		const target: any = document.querySelector(`#${targetId}`);
		const element: Element = document.createElement("div");
		element.innerHTML = html;
		target
			? target.appendChild(element)
			: console.error(`Something went wrong when trying to update the DOM. Is the target id "${targetId}" correct?`);
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
