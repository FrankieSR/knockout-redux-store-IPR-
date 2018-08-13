define(() => {
    return `<div class = "purchased" data-bind="visible: visibilityCart">
                <span>Your products:</span>
                <div class = 'purchased__item'>
                    <table width = '100%'>
                        <tr>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                        <!-- ko foreach: items -->
                        <tr>
                            <td class = "purchased__table-cell" data-bind = "text: name"></td>
                            <td class = "purchased__table-cell" data-bind = "text: price"></td>
                            <td class = "purchased__table-cell purchased__table-cell--remove"
                                data-bind = 'click: ()=>{$parent.removeItemInCart($index())}'>
                                <span>X</span>
                            </td>
                        </tr>
                        <!-- /ko -->
                    </table>
                </div>
            </div>`;
});
