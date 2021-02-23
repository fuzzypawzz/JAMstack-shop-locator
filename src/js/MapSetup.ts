// DOCS: https://developers.google.com/maps/documentation/javascript/using-typescript

// Helpers
import getClone from "./helpers/getClone";
import http from "./helpers/http";

// Template generators
import { template as listItemTemplate } from "../templates/_list-item";
import { template as infoWindowTemplate } from "../templates/_info-window";

// Interfaces
import { IHttpResponse } from "./helpers/http";
import IConfiguration from "./Interfaces/IConfiguration";
import IShopData from "./Interfaces/IShopData";
import IExtendedMarker from "./Interfaces/IExtendedMarker";

export default class MapSetup {
	private copenhagen: google.maps.LatLngLiteral = {
		lat: 55.6959315,
		lng: 12.4609883,
	};
	private markerStorage: Array<google.maps.Marker> = [];
	private map: google.maps.Map;
	private infoWindow: google.maps.InfoWindow;
	private wrapperForMapId: string = "mapDiv";
	private activateAutocomplete: boolean = false;
	public shopDataFromResponse: IHttpResponse<IShopData[]>;

	constructor(config: IConfiguration) {
		this.activateAutocomplete = config.autocomplete;
	}

	public async setup(): Promise<void> {
		this.infoWindow = new google.maps.InfoWindow();
		this.initMap();
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
			this.shopDataFromResponse = responseMock;
			//this.handleShopDataList(response.parsedBody)
			this.handleShopDataList(responseMock);
			this.generateShopListItems(responseMock);
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

	// private setLoadScreen(toggle: boolean) {
	// 	const overlay = document.createElement("div");
	// 	overlay.className = "load_overlay";
	// 	const wrapper: Element = document.querySelector("shop-locator-wrapper");
	// 	wrapper.append(overlay);
	// }

	// TOOD: Need to find out if all the shop data should be on the marker itself
	private handleShopDataList(shopDataList: IShopData[]): void {
		shopDataList.forEach((shop: IShopData) => {
			const latLngObject: google.maps.LatLngLiteral = this.contructLatLngObject(
				shop.lat,
				shop.lng
			);
			this.contructMarker(latLngObject, shop);
		});
	}

	private generateShopListItems(shopDataList: IShopData[]): void {
		const ul: Element = this.templateToElement(
			listItemTemplate({
				entries: shopDataList,
			})
		);
		const listItems = ul.querySelectorAll("input");

		function triggerMarkerClick(): void {
			google.maps.event.trigger(this, "click");
		}

		// TODO: The event bubbling should be disabled, so only 1 event fires on click
		listItems.forEach((item) => {
			item.addEventListener(
				"click",
				triggerMarkerClick.bind(
					this.markerStorage.find(
						(marker: IExtendedMarker) => marker.id == item.id
					)
				)
			);
		});

		this.updateDOM(ul, "listofstores");
	}

	private templateToElement(
		htmlTemplate: string,
		parentElementTag?: string
	): Element {
		const parentElement: Element = document.createElement(
			parentElementTag ? parentElementTag : "div"
		);
		parentElement.innerHTML = htmlTemplate;
		return parentElement;
	}

	private updateDOM(html: string | Element, targetId: string): void {
		const target: any = document.querySelector(`#${targetId}`);
		const element: Element =
			typeof html == "string" ? this.templateToElement(html) : html;

		try {
			target.appendChild(element);
		} catch (error) {
			console.warn(
				`Something went wrong when trying to update the DOM. Is target-id: "${targetId}" correct?`
			);
			throw new Error(error);
		}
	}

	private contructMarker(
		latLng: google.maps.LatLngLiteral,
		shopData: IShopData
	): google.maps.Marker {
		const infoWindow = this.infoWindow;

		const marker: IExtendedMarker = new google.maps.Marker({
			position: latLng,
			map: this.map
		});

		marker.id = `marker_${shopData.id}`;
		marker.markup = infoWindowTemplate(shopData);

		function addClickHandler(marker: IExtendedMarker) {
			function listItemHandler() {
				this.element.checked = true;
			}

			marker.addListener("click", function () {
				if (!this.listElementRadioBinding) {
					this.listElementRadioBinding = document.querySelector(`#${this.id}`);
				}
				this.listElementRadioBinding.checked = true;
				infoWindow.setContent(this.markup);
				infoWindow.setPosition(latLng);
				infoWindow.setOptions({
					// Display infowindow correctly relatively to the marker position
					pixelOffset: new google.maps.Size(0, -35),
				});
				this.map.setZoom(15);
				infoWindow.open(this.map);
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
