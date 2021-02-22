const Handlebars = require("handlebars");

export const template = Handlebars.compile(`
<ul>
{{#each entries}}
  <li>
    <section class="shop-locator-list-item padding--small">
      <input type="radio" name="toggle" id="marker_{{ id }}" />
      <label for="marker_{{ id }}">
        <h6 class="headline">{{ name }}</h6>
        <p class="shop-locator-list-item__address-info">
          <span>
            {{ street }}
            {{ houseNumber }}
          </span>
          <span>
            {{ zipCode }}
            {{ city }}
          </span>
        </p>
      </label>
      <section class="shop-locator-list-item__more-content">
        <p class="shop-locator-list-item__address-info">
          This section can hold more data like the phonenumber, opening hours, etc.
          <span>
            {{ phoneNumber }}
          </span>
        </p>
      </section>
    </section>
    <div class="shop-locator-list-bar"></div>
  </li>
  {{/each}}
</ul>
`);