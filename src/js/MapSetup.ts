// DOCS: https://developers.google.com/maps/documentation/javascript/using-typescript

// Helpers
import http from "./helpers/http";

// Constants
import ContentConstants from "./constants/Content";

// Template generators
import { template as listItemTemplate } from "../templates/_list-item";
import { template as infoWindowTemplate } from "../templates/_info-window";
import { template as shopLocatorTemplate } from "../templates/wrapper";

// Interfaces
import { IHttpResponse } from "./helpers/http";
import IConfiguration from "./Interfaces/IConfiguration";
import IShopData from "./Interfaces/IShopData";
import IExtendedMarker from "./Interfaces/IExtendedMarker";

// Mock data
import { responseMock } from "./MockData";
import autoCompleteSetup from "./autocomplete";

export default class MapSetup {
	private copenhagen: google.maps.LatLngLiteral = {
		lat: 55.6959315,
		lng: 12.4609883,
	};
	private markerStorage: Array<google.maps.Marker> = [];
	private map: google.maps.Map;
	private infoWindow: google.maps.InfoWindow;
	private wrapperForMapId: string = "mapDiv";
	private wrapperForShopLocatorId: string;
	private activateAutocomplete: boolean = false;
	private APIEndpoint: string;
	private MAPS_API_KEY: string;
	public shopDataFromResponse: IHttpResponse<IShopData[]>;
	public mockData: IShopData[];

	constructor(config: IConfiguration) {
		this.activateAutocomplete = config.autocomplete;
		this.APIEndpoint = config.APIEndpoint;
		this.MAPS_API_KEY = config.MAPS_API_KEY;
		this.wrapperForShopLocatorId = config.selector;
	}

	public loadMaps() {
		this.createShopLocatorElement();
		const scriptPromise = new Promise((resolve, reject) => {
			const script = document.createElement("script");
			document.body.appendChild(script);
			script.onload = resolve;
			script.onerror = reject;
			script.async = true;
			script.src = `https://maps.googleapis.com/maps/api/js?key=${this.MAPS_API_KEY}&libraries=geometry`;
		});
		scriptPromise.then(() => {
			this.setup();
		});
	}

	private async setup(): Promise<void> {
		this.infoWindow = new google.maps.InfoWindow();
		this.initMap();
		try {
			this.APIEndpoint
				? (this.shopDataFromResponse = await http<IShopData[]>(
						this.APIEndpoint
				  ))
				: (this.mockData = responseMock);

			const dataToPass: IHttpResponse<IShopData[]> | IShopData[] = this
				.shopDataFromResponse
				? this.shopDataFromResponse.parsedBody
				: this.mockData;

			this.handleShopDataList(dataToPass);
			this.generateShopListItems(dataToPass);
			this.activateAutocomplete ? autoCompleteSetup() : null;
		} catch (errorResponse) {
			console.log("There was an Error: ", errorResponse);
		}
	}

	private createShopLocatorElement(): void {
		const targetId = this.wrapperForShopLocatorId;
		this.updateDOM(
			shopLocatorTemplate({
				headline: ContentConstants.SEARCH_HEADLINE,
				inputPlaceholder: ContentConstants.SEARCH_FIELD_PLACEHOLDER,
			}),
			targetId
		);
	}

	/**
	 * Initiates the map with a custom configuration
	 */
	private initMap(): void {
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
			map: this.map,
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
