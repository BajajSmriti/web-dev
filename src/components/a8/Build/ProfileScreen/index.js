import React, {useEffect} from "react";
import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfile } from "../../services/profileService";

const ProfileIndex = () => {
    const profileData = useSelector((state) => state.profileData);
    const dispatch = useDispatch();
    useEffect(() => getCurrentProfile(dispatch), [])
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