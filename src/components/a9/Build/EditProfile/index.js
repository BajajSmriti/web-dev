import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { updateCurrentProfile } from "../../services/profileService";


const EditProfile = (props) => {
    var finalData = props.data;

    const dispatch = useDispatch();

    const middleware = (ele, event) => {
        if (ele === 'name') {
            finalData.firstName = event.split(" ")[0]
            finalData.lastName = event.split(" ")[1]
        }

        if (ele === 'bio')
            finalData.bio = event
        if (ele === 'location')
            finalData.location = event

        if (ele === 'website')
            finalData.website = event

        if (ele === 'dob'){
            event = moment(event, 'Y-M-D').format('MMMM D, Y');
            finalData.dateOfBirth = event

        }

    }

    const profileHandler = () => {
        props.setTrigger(false)
        updateCurrentProfile(dispatch, {profileData: finalData})
        // dispatch({
        //     type: 'create-profileData',
        //     profileData: finalData
        // });
    }

    var dob = moment(props.data.dateOfBirth, 'M/D/Y').format('MMMM D, Y');
    var fname = props.data.firstName + " " + props.data.lastName
    return (props.trigger) ? (
        <div className="row wd-popup">
            <div className="col-4 wd-profileInner">
                <div className="p-3 display-inline">
                    <i className="close-btn p-2 fas fa-times" onClick={() => props.setTrigger(false)}></i>
                    <span className="fs-5 text fw-bold px-3">EditProfile </span>
                    <button className="btn float-end btn-light rounded-pill"
                        onClick={profileHandler}>Save</button>
                </div>
                <div>
                    <img src={props.data.bannerPicture} alt={props.data.bannerPicture} className="wd-cover2"></img>
                    <div className="pt-3 px-2">
                        <img src={props.data.profilePicture} alt={props.data.profilePicture} className="wd-dp2 rounded-circle img-fluid"></img>
                    </div>
                </div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="wd-lightText">Name</span>
                        <br />
                        <input type="text" className="wd-darkInput" defaultValue={fname}
                            onChange={(event) => middleware("name", event.target.value)}></input>
                    </li>
                    <br />
                    <li className="list-group-item">
                        <span className="wd-lightText">Bio</span>
                        <br />
                        <textarea rows="3" className="wd-darkInput" defaultValue={props.data.bio}
                            onChange={(event) => middleware("bio", event.target.value)}></textarea>
                    </li>
                    <br />
                    <li className="list-group-item">
                        <span className="wd-lightText">Location</span>
                        <br />
                        <input type="text" className="wd-darkInput" defaultValue={props.data.location}
                            onChange={(event) => middleware("location", event.target.value)}></input>
                    </li>
                    <br />
                    <li className="list-group-item">
                        <input type="text" className="wd-darkInput" placeholder="Website"
                            onChange={(event) => middleware("website", event.target.value)}></input>
                    </li>
                    <br />
                    <li className="list-group-item">
                        <span className="wd-lightText">Birth date</span>
                        <br />
                        <input type="date" className="wd-darkInput" defaultValue={dob}
                            onChange={(event) => middleware("dob", event.target.value)}></input>
                    </li>
                </ul>
                <br />
            </div>


        </div>

    ) : "";

}

export default EditProfile;