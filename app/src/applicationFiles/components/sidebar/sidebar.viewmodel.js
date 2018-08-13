define(["knockout", "lib/knockout-store/connect"], (ko, connect) => {
    function productListViewModel(params) {
        //  ---- initialize the variables for viewmodel from store(state) --
        //
        const vm = {};
        vm.items = params.items;
        vm.inputValueMin = params.minPrice;
        vm.inputValueMax = params.maxPrice;
        vm.allProducts = ko.observableArray([]);

        //I want to iterate the above array elements in some click event !
        vm.clickedSomeWhere = (data) =>{
            vm.allProducts(params.items());
            params.pageIndex(0);
            let arr = [];
            ko.utils.arrayForEach(vm.items(), (item)=>  {
                if (item.price() >= vm.inputValueMin() && item.price() <= vm.inputValueMax()) {
                    arr.push(item);
                }
                vm.allProducts(arr);
            });


            console.log(vm.allProducts());
            params.allProducts(vm.allProducts());
        };

        return vm;
    }

    function joinParamsToState(vmObject) {

        return vmObject;
    }

    // join that viewModel to common store
    //
    return connect(joinParamsToState)(productListViewModel);
});
