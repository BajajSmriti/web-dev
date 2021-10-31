import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json";
const WhoToFollowList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item">Who to follow</li>
            {who.map(who => {
                return (<WhoToFollowListItem key= {who.id} who={who}></WhoToFollowListItem>);
            })
            }
        </ul>
    );
}

export default WhoToFollowList;