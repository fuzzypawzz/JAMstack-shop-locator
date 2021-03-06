interface IMapsAPI {
	key: string;
	callback: Function;
}

export class GoogleMapsLoader {
	private MAPS_API_KEY: string;
	private callback: Function;
	public map: google.maps.Map;

	constructor(parameters: IMapsAPI) {
		this.MAPS_API_KEY = parameters.key;
		this.callback = parameters.callback;
	}

	public injectScriptInBody() {
		const scriptPromise = new Promise((resolve, reject) => {
			const script = document.createElement("script");
			document.body.appendChild(script);
			script.onload = resolve;
			script.onerror = reject;
			script.async = true;
			script.src = `https://maps.googleapis.com/maps/api/js?key=${this.MAPS_API_KEY}&libraries=geometry`;
		});
		scriptPromise.then(() => {
			this.callback();
		});
	}

	public initMap(center: google.maps.LatLngLiteral, wrapperId: string): void {
		this.map = new google.maps.Map(
			document.getElementById(wrapperId) as HTMLElement,
			{
				center: center,
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
}
