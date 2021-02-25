// DOCS: https://developers.google.com/maps/documentation/javascript/using-typescript

// Helper functions
import http from "./helpers/http";
import convertTemplateToElement from "./helpers/templateToElement";
import updateDOM from "./helpers/updateDOM";

// Extensions
import autoCompleteSetup from "./autocomplete";

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

// Classes
import { GoogleMapsLoader } from "./Classes/GoogleMapLoader";
import { LatLngObject } from "./Classes/LatLngObject";

export default class MapSetup {
	private copenhagen: google.maps.LatLngLiteral = {
		lat: 55.6959315,
		lng: 12.4609883,
	};
	private markerStorage: Array<google.maps.Marker> = [];
	private mapLoader: GoogleMapsLoader;
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

	/**
	 * Entry point "loadMaps()" should be called first.
	 * It will generate the HTML for the app and inject that +
	 * a script onto the document body, to load the google maps instance.
	 */
	public loadMaps() {
		const targetId = this.wrapperForShopLocatorId;
		updateDOM(
			shopLocatorTemplate({
				headline: ContentConstants.SEARCH_HEADLINE,
				inputPlaceholder: ContentConstants.SEARCH_FIELD_PLACEHOLDER,
			}),
			targetId
		);

		this.mapLoader = new GoogleMapsLoader({
			key: this.MAPS_API_KEY,
			callback: this.setup.bind(this),
		});

		this.mapLoader.injectScriptInBody();
	}

	/**
	 * Sets up the main elements in the app, like the google maps map instance
	 * and then it moves on to call methods for loading the API data
	 */
	private async setup(): Promise<void> {
		// Instanciate only 1 infoWindow - and that windows state can then change over time.
		// It's important that we don't create new infoWindows every time we click a marker.
		this.infoWindow = new google.maps.InfoWindow();

		this.mapLoader.initMap(this.copenhagen, this.wrapperForMapId);
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

	// TOOD: Need to find out if all the shop data should be on the marker itself
	private handleShopDataList(shopDataList: IShopData[]): void {
		shopDataList.forEach((shop: IShopData) => {
			const latLngObject = new LatLngObject({
				lat: shop.lat,
				lng: shop.lng,
			}).getObject();
			
			// It's important to save the marker, since our list-item..
			// ..event listeners is referencing those stores markers
			this.saveMarker(this.contructMarker(latLngObject, shop));
		});
	}

	private generateShopListItems(shopDataList: IShopData[]): void {
		const template: string = listItemTemplate({ entries: shopDataList });
		const ul: Element = convertTemplateToElement(template);
		const inputFieldsInList = ul.querySelectorAll("input");

		function triggerMarkerClick(): void {
			google.maps.event.trigger(this, "click");
		}

		// TODO: The event bubbling should be disabled, so only 1 event fires on click
		inputFieldsInList.forEach((input) => {
			input.addEventListener(
				"click",
				triggerMarkerClick.bind(
					this.markerStorage.find(
						(marker: IExtendedMarker) => marker.id == input.id
					)
				)
			);
		});
		updateDOM(ul, "listofstores");
	}

	private contructMarker(
		latLng: google.maps.LatLngLiteral,
		shopData: IShopData
	): google.maps.Marker {
		const infoWindow = this.infoWindow;

		const marker: IExtendedMarker = new google.maps.Marker({
			position: latLng,
			map: this.mapLoader.map,
		});
		marker.id = `marker_${shopData.id}`;
		marker.markup = infoWindowTemplate(shopData);

		function addClickHandler(marker: IExtendedMarker) {
			marker.addListener("click", function () {
				if (!this.correspondingListItem) {
					this.correspondingListItem = document.querySelector(`#${this.id}`);
				}
				this.correspondingListItem.checked = true;
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
		return marker;
	}

	private saveMarker(marker: google.maps.Marker) {
		this.markerStorage.push(marker);
	}
}
