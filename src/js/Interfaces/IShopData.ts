export default interface IShopData {
	name: string;
	street: string;
	houseNumber?: string | number;
	city: string;
	zipCode: number | string;
	phoneNumber?: number;
	id?: string;
	lat: number | string;
	lng: number | string;
}