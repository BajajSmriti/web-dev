const PostItem = (posts) => {
    posts = posts.posts
    var link = ''
    var html = ''
    if (posts.link != '') {
        link = "https://" + posts.link
        html = <li className="list-group-item">
            <span className=""> {posts.desc1}</span><br />
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

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2 col-lg-2"><img src={posts.userImage} className="wd-dp" /></div>
                <div className="col-10 col-lg-10">
                    {posts.userName}&nbsp;<i className="fa fa-check-circle"></i>&nbsp;
                    <div className="wd-gray">@{posts.handle} <span>&nbsp;&#183;&nbsp;</span> {posts.time}</div>
                    <div className="small pb-2">{title}</div>
                    <ul className="list-group">
                        <li className="list-group-item wd-inner">
                            <img src={posts.image} className="wd-inner" />
                        </li>
                        {html}
                        <li className="wd-nostyle wd-gray">
                            <i className="far fa-comment wd-iFirst"></i>{posts.comments}
                            <i className="fas fa-retweet wd-i"></i>{posts.retweets}
                            <i className="far fa-heart wd-i"></i>{posts.likes}
                            <i className="fas fa-upload wd-i"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    );

}
export default PostItem;

