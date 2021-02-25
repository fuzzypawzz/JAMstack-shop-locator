// @ts-nocheck

const autoComplete = require("autoComplete");

// TODO: Convert to TypeScript and remove ts-nocheck

export default function autoCompleteSetup() {
	new autoComplete({
		data: {
																	// Data src [Array, Function, Async] | (REQUIRED)
			src: async () => {
				// User search query
				const query = document.querySelector("#autoComplete").value;

				if (shopLocator.shopDataFromResponse) {
					return shopLocator.shopDataFromResponse.parsedBody;
				} else if (shopLocator.mockData) {
					return shopLocator.mockData;
				} else {
					return [];
				}
			},
			key: ["name", "street", "zipCode", "city"],
			cache: true,
		},
		query: {
																	// Query Interceptor                 | (Optional)
			manipulate: (query) => {
				return query.replace("aa", "å");
			},
		},
		sort: (a, b) => {
																	// Sort rendered results ascendingly | (Optional)
			if (a.match < b.match) return -1;
			if (a.match > b.match) return 1;
			return 0;
		},
		selector: "#autoComplete", 		// Input field selector              | (Optional)
		observer: true, 							// Input field observer              | (Optional)
		threshold: 1, 								// Min. Chars length to start Engine | (Optional)
		debounce: 100, 								// Post duration for engine to start | (Optional)
		searchEngine: "strict", 			// Search Engine type/mode           | (Optional)
		resultsList: {
																	// Rendered results list object      | (Optional)
			container: (source) => {
				source.setAttribute("id", "results_list");
			},
			destination: "#autoComplete",
			position: "afterend",
			element: "ul",
		},
		maxResults: 5, 								// Max. number of rendered results | (Optional)
		highlight: true, 							// Highlight matching results      | (Optional)
		resultItem: {
																	// Rendered result item            | (Optional)
			content: (data, source) => {
				// TODO: Should come from constants based on the keys in the response
				const dataToDisplay = [
					"name",
					"street",
					"houseNumber",
					"zipCode",
					"city",
				];

				let string = "";
				dataToDisplay.forEach((item) => {
					if (item == data.key) {
						string += `<span class="result_${item}"><strong>${data.value[item]}</strong></span> `;
					} else {
						string += `<span class="result_${item}">${data.value[item]}</span> `;
					}
				});
				source.innerHTML = string;
			},
			element: "li",
		},
		noResults: (dataFeedback, generateList) => {},
		onSelection: (feedback) => {
																// Action script onSelection event | (Optional)
			document.querySelector(`#marker_${feedback.selection.value.id}`).click();
		},
	});
}
