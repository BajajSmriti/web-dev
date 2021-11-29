import { React, useState } from "react";
import Moment from 'moment';
import EditProfile from "../EditProfile";
// import { useDispatch } from "react-redux";


const Profile = (profileData) => {

    const [buttonPop, setPopup] = useState(false);

    profileData = profileData.data
    // const dispatch = useDispatch();
    
    var dob
    if (Moment(profileData.dateOfBirth, 'MMMM D, Y',true).isValid())
        dob = profileData.dateOfBirth
    
    else
        dob = Moment(profileData.dateOfBirth).format('MMMM D, Y');
    

    var doj = Moment(profileData.dateJoined).format('MMMM Y');
    var web;
    if (profileData.website.includes("https://"))
        web = profileData.website
    else
        web = "https://" + profileData.website

    return (
        <li className="wd-list1 list-group-item">

            <i className="fas fa-long-arrow-alt-left wd-back fa-lg p-3"></i>
            <span className="fs-5 text fw-bold">{profileData.firstName} {profileData.lastName} </span>
            <span className="d-block wd-lightText px-5">80 Tweets</span>
            <br />
            <div>
                <img src={profileData.bannerPicture} alt={profileData.bannerPicture} className="wd-coverimg"></img>
                <div className="pt-3 px-2">
                    <img src={profileData.profilePicture} alt={profileData.profilePicture} className="wd-dpimg rounded-circle img-fluid"></img>
                    <button className="btn btn-light rounded-pill" onClick={() => setPopup(true)}>Edit Profile</button>
                </div>
            </div>
            <p>
                <span className="fs-5 text fw-bold">{profileData.firstName} {profileData.lastName}</span>
                <span className="d-block wd-lightText pt-1">@{profileData.handle} </span>
            </p>
            <p className="fs-6 text fw-lighter">
                {profileData.bio}
                <br />
            </p>

            <span className="wd-lightText">
                <i className="fas fa-map-marker-alt"></i>&nbsp; {profileData.location} &nbsp;
                <i className="fas fa-link"></i>&nbsp; <a href={web} className="wd-profileA">{profileData.website} &nbsp;</a>
                <i className="fas fa-map-pin"></i>&nbsp; {dob} &nbsp;
                <br />
                <i className="fas fa-calendar-alt"></i>&nbsp; {doj} &nbsp;
            </span>
            <br /> <br />
            {profileData.followingCount} <span className="wd-lightText">Following</span> &nbsp; 
            {profileData.followersCount} <span className="wd-lightText">Followers</span>

            <EditProfile trigger={buttonPop} setTrigger={setPopup} data={profileData}/>
        </li>

    )
};

export default Profile;