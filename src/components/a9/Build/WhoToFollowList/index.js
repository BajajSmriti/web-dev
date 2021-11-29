import React, { useEffect } from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
// import who from "./who.json";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllWhos } from "../../services/whoService";


const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    const dispatch = useDispatch();
    useEffect(() => fetchAllWhos(dispatch), [])
        return (
            <ul className="list-group">
                <li className="list-group-item">Who to follow</li>
                {who.map(who => {
                    return (<WhoToFollowListItem key={who.id} who={who}></WhoToFollowListItem>);
                })
                }
            </ul>
        );
}

export default WhoToFollowList;