import NavigationSidebar from "../NavigationSidebar";
import PostList from "../PostList/index.js";
import PostSummaryList from "../PostSummaryList";
import "../css/home.css";

const HomeScreen = () => {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home" />
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                <PostList />
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <ul className="list-group">
                    <li className="list-group-item border-bottom-0"><b>What's happening!</b>
                    </li>
                </ul>
                <PostSummaryList />
            </div>
        </div>
    );
}

export default HomeScreen;
