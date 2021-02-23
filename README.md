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
const configuration =
{
	autocomplete: true,
	APIEndpoint: "[YOUR_API_ENDPOINT]"
	MAPS_API_KEY: "[YOUR_GOOGLE_MAPS_API_KEY]"
};

const shopLocator = new ShopLocator.MapSetup(configuration);
shopLocator.loadMaps();
```

### API Endpoint to get store data
- As of today, you will be prompted in the browser for a URL to fetch store-data from.
- You can simply click "cancel" or leave the field empty to launch the Shop Locator with predefined test-data.
- The mock JSON is located here: /src/js/mockData.ts
