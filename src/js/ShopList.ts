interface IShopDetails {
	name: string;
	street: string;
	houseNumber?: string;
	city: string;
	zipcode: number;
	phoneNumber?: number;
	id?: string;
}

class ShopList {
	shopDetails: IShopDetails[];

	constructor(shopDetails: IShopDetails[]) {
		this.shopDetails = shopDetails;
	}
}
