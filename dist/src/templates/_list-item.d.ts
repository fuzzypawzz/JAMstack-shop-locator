export declare const template = "\n<li id=\"marker_@Html.DisplayFor(storeInModel => item.ID)\">\n  <section class=\"shop-locator-list-item padding--small\">\n    <input type=\"radio\" name=\"toggle\" id=\"section-toggle_@Html.DisplayFor(storeInModel => item.ID)\" />\n    <label for=\"section-toggle_@Html.DisplayFor(storeInModel => item.ID)\">\n      <h6 class=\"headline\">@Html.DisplayFor(storeInModel => item.Name)</h6>\n      <p class=\"shop-locator-list-item__address-info\">\n        <span>\n          @Html.DisplayFor(storeInModel => item.Street)\n          @Html.DisplayFor(storeInModel => item.Housenumber)\n        </span>\n        <span>\n          @Html.DisplayFor(storeInModel => item.Zipcode)\n          @Html.DisplayFor(storeInModel => item.City)\n        </span>\n      </p>\n    </label>\n    <section class=\"shop-locator-list-item__more-content\">\n      <p class=\"shop-locator-list-item__address-info\">\n        This section can hold more data like the phonenumber, opening hours, etc.\n        <span>\n          Telefon: @Html.DisplayFor(storeInModel => item.Phonenumber)\n        </span>\n      </p>\n    </section>\n  </section>\n  <div class=\"shop-locator-list-bar\"></div>\n</li>\n";
