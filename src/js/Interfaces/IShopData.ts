export default interface IShopData {
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