interface IConfiguration {
	urlQuery: string;
	InputFieldSelector: string;
	targetInputName: string;
	searchKey: string;
}

export default class HumanyNotificationDetector {
	private showCph: Object = { lat: 55.6959315, lng: 12.4609883 };
	private markerStorage: Array<any> = [];
	private map: Object;
	private infoWindow: Object;
	private searchKey: string = "searchkey";

	constructor(config: IConfiguration) {
		this.urlQuery = config.urlQuery;
		this.InputFieldSelector = config.InputFieldSelector;
		this.targetInputName = config.targetInputName;
		this.searchKey = config.searchKey;
		this.fetch = this.fetch.bind(this);
	}

	public getClone(id: string): Node {
		let node = document.querySelector(`#${id}`);
		if (!node) {
			throw new Error("Template to clone could not be found");
		}
		// Changed this to be true instead of [true]
		return node.cloneNode(true);
	}

	private fetch() {
    // TODO: Refactor to use fetch async
    const _addMarker = this.addMarker;
    const _contructLatLngObject = this.contructLatLngObject;
    
		let xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				// How do i make sure that this is always a list? For safety.
				let list = JSON.parse(xmlhttp.responseText);
				list.forEach((objectInList: any) => {
					const latLng = _contructLatLngObject(
						objectInList.lat,
						objectInList.lng
					);
					  _addMarker(latLng, objectInList);
				});
			}
		};

		xmlhttp.open("GET", "/Stores/GetCoordinates", true);
		xmlhttp.send();
	}

	private contructLatLngObject(lat: string, lng: string) {
		return {
			lat: parseFloat(lat),
			lng: parseFloat(lng),
		};
	}

	public clickMarker(marker: Object) {
    google.maps.event.trigger(marker, "click");
  }

	private addMarker(latLng, model) {
		if (typeof latLng !== "object") {
			throw new Error("Marker coordinates must be an object!");
		}
		const marker = new google.maps.Marker({
			position: latLng,
			map,
			id: `marker_${model.id}`,
		});

		// TODO: Refractor, make controller return the id format like: "marker_ID"
		// When done, just call querySelector with this.id and remove the prefix from the view: stores/index.cshtml
		marker.addListener("click", function () {
			let listItemRadio = document
				.querySelector(`#${this.id}`)
				.querySelector("input");
			listItemRadio.checked = true;

			let infoWindowContent = getClone(`popup_${model.id}`);
			infoWindow.setContent(infoWindowContent);
			infoWindow.setPosition(latLng);
			infoWindow.setOptions({
				// Display infowindow correctly relatively to the marker position
				pixelOffset: new google.maps.Size(0, -30),
			});
			map.setZoom(15);
			infoWindow.open(map);
			map.setCenter(latLng);
		});

		markerStorage.push(marker);
	}
}
