interface ILatLng {
  lat: string | number;
  lng: string | number;
}

export class LatLngObject {
  private latLng: google.maps.LatLngLiteral

  constructor(parameters: ILatLng) {
    this.latLng = {
      lat: parseFloat(parameters.lat as string),
			lng: parseFloat(parameters.lng as string),
    }
  }

  public getObject(): google.maps.LatLngLiteral {
    return this.latLng;
  }
}