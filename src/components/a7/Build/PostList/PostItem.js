import React from "react";
import { useDispatch } from "react-redux";

const PostItem = (posts) => {
    const dispatch = useDispatch();

    const deletePostClickHandler = () => {
        dispatch({ type: 'delete-post', posts })
    };

    const likeClickHandler = () => {
        dispatch({ type: 'like-post', posts });
    };


    posts = posts.posts
    var link = ''
    var html = ''
    var img = ''
    var desc1 = ''
    if (posts.desc1) {
        desc1 = <span className=""> {posts.desc1}</span>

    }
    if (posts.link && posts.link !== '') {
        link = "https://" + posts.link
        html = <li className="list-group-item">
            {desc1}
            <br />
            <span className="wd-gray">{posts.desc2}</span>
            <br />
            <div className="wd-gray"><i className="fas fa-link"></i>
                <a href={link} className="wd-dec">{posts.link}</a></div>
        </li>
    }
    var title = ''
    if (posts.title.includes("#B")) {
        title = posts.title
        title = title.split("#B");
        title = <span>{title[0]}<a href={link}>{title[1]}</a>{title[2]}</span>
    }
    else {
        title = <span>{posts.title}</span>
    }

    if (posts.image) {
        img = <li className="list-group-item wd-inner">
            <img src={posts.image} alt={posts.image} className="wd-inner" />
        </li>

    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2 col-lg-2"><img src={posts.userImage} alt={posts.userImage} className="wd-dp" /></div>
                <div className="col-10 col-lg-10">
                    <i onClick={deletePostClickHandler}
                        className="fa fa-remove wd-right"></i>
                    {posts.userName}&nbsp;<i className="fa fa-check-circle"></i>&nbsp;
                    <div className="wd-gray">@{posts.handle} <span>&nbsp;&#183;&nbsp;</span> {posts.time}</div>
                    <div className="small pb-2">{title}</div>
                    <ul className="list-group">
                        {img}
                        {html}
                        <li className="wd-nostyle wd-gray">
                            <i className="far fa-comment wd-iFirst"></i>{posts.comments}
                            <i className="fas fa-retweet wd-i"></i>{posts.retweets}
                            <span className="wd-i" onClick={likeClickHandler}>
                                {
                                    posts.liked && <i className="fas fa-heart me-2"
                                        style={{ color: posts.liked ? "red" : "white" }}></i>
                                }
                                {
                                    !posts.liked && <i className="far fa-heart me-2"></i>
                                }
                                {posts.likes}
                            </span>
                            <i className="fas fa-upload wd-i"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    );

}
export default PostItem;

