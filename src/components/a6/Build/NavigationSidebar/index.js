import React from "react";

const NavigationSidebar = ({
    active = 'explore'
}
) => {
    return (
        <>
            <div className="list-group">
                <a className="list-group-item" href="/">
                    <i className="fab fa-twitter"></i></a>
                <a className={`list-group-item ${active === 'home' ? 'active' : ''}`} href="/a6/build/home">
                    <i className="fas fa-home"></i>
                    <span className="menu-text"> Home </span>
                </a>
                <a className={`list-group-item ${active === 'explore' ? 'active' : ''}`} href="/a6/build/explore">
                    <i className="fas fa-hashtag"></i>
                    <span className="menu-text"> Explore </span>
                </a>
                <a className={`list-group-item ${active === 'notifications' ? 'active' : ''}`} href="/">
                    <i className="fas fa-bell"></i>
                    <span className="menu-text"> Notifications </span>
                </a>
                <a className={`list-group-item ${active === 'messages' ? 'active' : ''}`} href="/">
                    <i className="fas fa-envelope"></i>
                    <span className="menu-text"> Messages </span>
                </a>
                <a className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`} href="/">
                    <i className="fas fa-bookmark"></i>
                    <span className="menu-text"> Bookmarks </span>
                </a>
                <a className={`list-group-item ${active === 'lists' ? 'active' : ''}`} href="/">
                    <i className="fas fa-list"></i>
                    <span className="menu-text"> Lists </span>
                </a>
                <a className={`list-group-item ${active === 'profile' ? 'active' : ''}`} href="/">
                    <i className="fas fa-user"></i>
                    <span className="menu-text"> Profile </span>
                </a>
                <a className={`list-group-item ${active === 'more' ? 'active' : ''}`} href="/">
                    <i className="fas fa-ellipsis-h"></i>
                    <span className="menu-text"> More </span>
                </a>

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

