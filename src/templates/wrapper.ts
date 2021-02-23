const Handlebars = require("handlebars");

export const template = Handlebars.compile(`
<div class="shop-locator-wrapper">
	<div class="shop-locator-container--left" id="search-header">
		<section class="shop-locator-search padding--small">
			<h4 class="search-headline">{{ headline }}</h4>
			<div class="input-field col s6">
				<input
					id="autoComplete"
					placeholder="{{ inputPlaceholder }}"
					type="text"
					class="validate"
				/>
			</div>
		</section>
		<section class="shop-locator-list" id="listofstores"></section>
	</div>
	<div class="shop-locator-container--right" id="mapDiv"></div>
</div>
`);