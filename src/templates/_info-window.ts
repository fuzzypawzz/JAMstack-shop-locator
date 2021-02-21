const Handlebars = require("handlebars");

export const template = Handlebars.compile(`
  <div style="display: none" class="infowindow-templates">
    @foreach (var item in Model)
    {
    <div class="popup-content" id="popup_@Html.DisplayFor(storeInModel => item.ID)">
        <!--<img src="http://placehold.it/100x100" class="popup-image" />-->
        <h6 class="popup-storename">@Html.DisplayFor(storeInModel => item.Name)</h6>
        <p class="shop-locator-list-item__address-info" style="margin-top: 5px;">
            <span>
                @Html.DisplayFor(storeInModel => item.Street)
                @Html.DisplayFor(storeInModel => item.Housenumber)
            </span>
            <span>
                @Html.DisplayFor(storeInModel => item.Zipcode)
                @Html.DisplayFor(storeInModel => item.City)
            </span>
        </p>
    </div>
    }
</div>
`);
