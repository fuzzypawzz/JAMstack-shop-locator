export const template = `
<li id="marker_@Html.DisplayFor(storeInModel => item.ID)">
  <section class="shop-locator-list-item padding--small">
    <input type="radio" name="toggle" id="section-toggle_@Html.DisplayFor(storeInModel => item.ID)" />
    <label for="section-toggle_@Html.DisplayFor(storeInModel => item.ID)">
      <h6 class="headline">@Html.DisplayFor(storeInModel => item.Name)</h6>
      <p class="shop-locator-list-item__address-info">
        <span>
          @Html.DisplayFor(storeInModel => item.Street)
          @Html.DisplayFor(storeInModel => item.Housenumber)
        </span>
        <span>
          @Html.DisplayFor(storeInModel => item.Zipcode)
          @Html.DisplayFor(storeInModel => item.City)
        </span>
      </p>
    </label>
    <section class="shop-locator-list-item__more-content">
      <p class="shop-locator-list-item__address-info">
        This section can hold more data like the phonenumber, opening hours, etc.
        <span>
          Telefon: @Html.DisplayFor(storeInModel => item.Phonenumber)
        </span>
      </p>
    </section>
  </section>
  <div class="shop-locator-list-bar"></div>
</li>
`;