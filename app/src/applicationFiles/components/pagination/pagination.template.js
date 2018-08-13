// ---- pangination template  ----
define(() => {
    return `<nav class = "pagination">
                <ul class="pagination__list" data-bind="visible: maxPageIndex() != 0">
                    <li class="pagination__item pagination__item--arrow" data-bind="css: { disabled: pageIndex() === 0 }">
                        <a class="pagination__link" href="#" data-bind="click: prevPage">
                            <</a>
                    </li>
                    <!-- ko foreach: allPages -->
                            <li class="pagination__item" data-bind="click: () => { $parent.panginationPage($index())}">
                                <a class="pagination__link" href="#" data-bind="text: $index() + 1"></a>
                            </li>
                    <!-- /ko -->

                    <li class="pagination__item pagination__item--arrow" data-bind="visible: {ifnot: items === 0}, css: { disabled: pageIndex() === maxPageIndex() }">
                        <a class="pagination__link" href="#" data-bind="click: nextPage">></a>
                    </li>
                </ul>
            </nav>`
});
