import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewPost } from "../../services/TwitterService";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();

    const postClickHandler = () => {
        // dispatch({
        //     type: 'create-post',
        //     post: {
        //         post: whatsHappening
        //     }
        // });
        createNewPost(dispatch, {
            post: whatsHappening
        });

    }
    
    return (
        <>
            <table style={{ marginBottom: '16px' }}>
                <tbody>
                    <tr>
                        <td style={{ verticalAlign: 'top' }}>
                            <img src={'../../Images/elon.jpg'}
                                alt = "elon.jpg" className="wd-dp" />
                        </td>
                        <td style={{ width: "100%" }}>
                            <textarea value={whatsHappening}
                                onChange={(event) => setWhatsHappening(event.target.value)}
                                className="form-control"
                                style={{
                                    width: "100%", color: "white",
                                    padding: "0px",
                                    paddingTop: "15px",
                                    backgroundColor: "black"
                                }}
                                placeholder="What's happening?"></textarea>
                            <hr />
                            <span>
                                <a href="/"><i className="far fa-image me-3"></i></a>
                                <a href="/"><i className="fa fa-bar-chart me-3"></i></a>
                                <a href="/"><i className="far fa-smile me-3"></i></a>
                                <a href="/"><i className="far fa-calendar me-3"></i></a>
                            </span>
                            <button onClick={postClickHandler} className="btn btn-primary fa-pull-right rounded-pill">
                                Post
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default WhatsHappening;