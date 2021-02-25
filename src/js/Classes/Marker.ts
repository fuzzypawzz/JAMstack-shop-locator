import IExtendedMarker from "../Interfaces/IExtendedMarker";
import IShopData from "../Interfaces/IShopData";
import { template as infoWindowTemplate } from "../../templates/_info-window";

interface IExtendedMarkerOptions extends google.maps.MarkerOptions {
	latLng: google.maps.LatLngLiteral;
	map: any;
	id: string;
	shopData: IShopData;
}

interface IConfiguration extends IExtendedMarkerOptions {
	infoWindow: google.maps.InfoWindow;
}

export class Marker {
	private infoWindow: google.maps.InfoWindow;
	private marker: google.maps.Marker;

	constructor(parameters: IConfiguration) {
		this.infoWindow = parameters.infoWindow;
		this.marker = this.contruct({
			latLng: parameters.latLng,
			map: parameters.map,
			id: parameters.shopData.id,
			shopData: parameters.shopData,
		});
	}

	private contruct(parameters: IExtendedMarkerOptions): google.maps.Marker {
		const marker: IExtendedMarker = new google.maps.Marker({
			position: parameters.latLng,
			map: parameters.map,
		});
		marker.id = `marker_${parameters.id}`;
		marker.markup = infoWindowTemplate(parameters.shopData);
		this.addMarkerClickHandler(marker);
		return marker;
	}

	public getMarker(): google.maps.Marker {
		return this.marker;
	}

	private addMarkerClickHandler(marker: IExtendedMarker) {
		const infoWindow = this.infoWindow;

		marker.addListener("click", function () {
			if (!this.correspondingListItem) {
				this.correspondingListItem = document.querySelector(`#${this.id}`);
			}
			this.correspondingListItem.checked = true;
			infoWindow.setContent(this.markup);
			infoWindow.setPosition(this.position);
			infoWindow.setOptions({
				// Display infowindow correctly relatively to the marker position
				pixelOffset: new google.maps.Size(0, -35),
			});
			this.map.setZoom(15);
			infoWindow.open(this.map);
			this.map.setCenter(this.position);
		});
	}
}
