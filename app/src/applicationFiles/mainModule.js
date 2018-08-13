//--------  global path to files ----------------------------
let path = "applicationFiles/components/";
//-----------------------------------------------------------

define([
    "knockout",
    "lib/knockout-store/index",
    "applicationFiles/data/getData",
    "lib/knockout-store/store",
    "lib/knockout-store/connect",
    path + "app/index",
    path + "app/app.viewmodel"
], (ko, { setState }, getData) => {
    ko.deferUpdates = true;
    let dataURL = "http://5b165eaba1c7e300147c8724.mockapi.io/products";

    //  -- this is my application state  ----
    //  -- used variables ------
    const state = {
        items: ko.observableArray([]),
        allProducts: ko.observableArray([]),
        pageSize: ko.observable(9), // change quantity products on page in begin
        pageIndex: ko.observable(0),
        itemsLength: ko.observable(),
        maxPrice: ko.observable(),
        minPrice: ko.observable(),
        myLocalStorage: ko.observableArray([localStorage]),
        storageLenth: ko.observable(localStorage.length),
        itemsInPurchaseCart: ko.observableArray(),
        visibilityCart: ko.observable(false)
    };

    setState(state);

    // ---- get json data ----------------
    try {
        getData(dataURL, data => {
            // --- create a new array with my state data ---
            console.log(data);
            const observableProducts = data.map(
                ({ name, price, description, images }) => {
                    return {
                        name: ko.observable(name),
                        price: ko.observable((price / 1000) * 1000),
                        description: ko.observable(description),
                        image: ko.observable(images[0])
                    };
                }
            );

            observableProducts.sort((a, b) => {
                if (a.price() > b.price()) {
                    state.maxPrice(a.price());
                }
                if (a.price() < b.price()) {
                    state.minPrice(a.price());
                }
            });
            console.log(state.maxPrice().toFixed(0));
            console.log(state.minPrice());
            state.allProducts(observableProducts);
            state.itemsLength(state.allProducts().length);
            state.items(observableProducts);
        });
    } catch (err) {
        console.log(" WARNING! We are have a problem! Please fix this ->", err);
    }

    ko.applyBindings();
});
