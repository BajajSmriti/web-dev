import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";

(function ($) {
$('#wd-home').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar('home')}
        </div>
        <div class="col-10 col-md-10 col-lg-7 col-xl-6">
            ${PostList()}
        </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            <ul class="list-group">
                <li class="list-group-item border-bottom-0"><b>What's happening!</b>
                </li>
            </ul>
            ${PostSummaryList()}
        </div>
        </div>
    `);
})($);
