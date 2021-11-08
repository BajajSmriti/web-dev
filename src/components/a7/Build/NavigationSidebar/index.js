import React from "react";
import { Link } from "react-router-dom";

const NavigationSidebar = ({
    active = 'explore'
}
) => {
    return (
        <>
            <div className="list-group">
                <Link to="/a7" className="list-group-item">
                    <i className="fab fa-twitter"></i></Link>
                <Link to="/a7/twitter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                    <i className="fas fa-home"></i>
                    <span className="menu-text"> Home </span>
                </Link>
                <Link to="/a7/twitter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fas fa-hashtag"></i>
                    <span className="menu-text"> Explore </span>
                </Link>
                <Link to="/a7/twitter/notifications" className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
                    <i className="fas fa-bell"></i>
                    <span className="menu-text"> Notifications </span>
                </Link>
                <Link to="/a7/twitter/messages" className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
                    <i className="fas fa-envelope"></i>
                    <span className="menu-text"> Messages </span>
                </Link>
                <Link to="/a7/twitter/bookmarks" className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
                    <i className="fas fa-bookmark"></i>
                    <span className="menu-text"> Bookmarks </span>
                </Link>
                <Link to="/a7/twitter/lists" className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
                    <i className="fas fa-list"></i>
                    <span className="menu-text"> Lists </span>
                </Link>
                <Link to="/a7/twitter/profile" className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                    <i className="fas fa-user"></i>
                    <span className="menu-text"> Profile </span>
                </Link>
                <Link to="/a7/twitter/more" className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
                    <i className="fas fa-ellipsis-h"></i>
                    <span className="menu-text"> More </span>
                </Link>

            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                    className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;

