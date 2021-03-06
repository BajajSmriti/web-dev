import React from "react";
const WhoToFollowListItem = (
    {
        who = {
            "avatarIcon": "/images/java.jpg",
            "userName": "Java", "handle": "Java"
        }
    }) => {
    return (
        <li className="list-group-item">
            <button className="btn btn-primary btn-sm followBtn" type="button">Follow</button>
            <img src={who.avatarIcon} alt={who.avatarIcon} className="wd-follow-img" />
            {who.userName}&nbsp;
            <i className="fa fa-check-circle"></i>
            <br />
            <a href="/handle" className="wd-follow-handle">@{who.handle}</a>
        </li>
    );
}
export default WhoToFollowListItem;

