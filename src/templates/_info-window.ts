const Handlebars = require("handlebars");

export const template = Handlebars.compile(`
  <div class="infowindow-templates">
    <div class="popup-content">
        <img src="http://placehold.it/220x100" class="popup-image" />
        <h6 class="popup-storename">{{ name }}</h6>
        <p class="shop-locator-list-item__address-info" style="margin-top: 5px;">
            <span>
                {{ street }}
                {{ houseNumber }}
            </span>
            <span>
                {{ zipCode }}
                {{ city }}
          </span>
        </p>
    </div>
</div>
`);
