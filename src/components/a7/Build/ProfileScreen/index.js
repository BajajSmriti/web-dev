import React from "react";
import Profile from "./Profile";
import { useSelector } from "react-redux";

const ProfileIndex = () => {
    const profileData = useSelector((state) => state.profileData);
    return (
        <ul className="list-group">
            {profileData.map(profileData => {
                return (<Profile key={profileData.id} data={profileData} />);
            })
            }
        </ul> 
    );

}

export default ProfileIndex;