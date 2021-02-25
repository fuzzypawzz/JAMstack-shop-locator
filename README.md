# JAMstack-shop-locator
The Shop Locator is static web application made with the JAMStack architecture in mind. The project is made as part of my exam project in Cloud Technologies at CPH Business in Copenhagen.
## Project setup
- Clone the repository
- Run "npm Install"
- "npm run dev" & spin up your local dev server
- Navigate to [localhost:port]/dist/index.html in your browser

### Configuration
- Load the bundle.js script.
- Create a new ShopLocator instance and call loadMaps() on it:
```
const shopLocator = new ShopLocator.MapSetup(
	{
		autocomplete: true,
		APIEndpoint: "[YOUR_API_ENDPOINT]"
		MAPS_API_KEY: "[YOUR_GOOGLE_MAPS_API_KEY]"
	}
);
shopLocator.loadMaps();
```

### Loading store data from your an API
- Provide your own store data, by typing your API endpoint URL in the configuration object.
- For testing purposes, the app will load with mock JSON data if no URL is provided.
- The mock JSON is located here: /src/js/mockData.ts - refer to the mock data as being the 'data contract'.
