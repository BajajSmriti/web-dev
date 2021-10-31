const PostSummaryItem = ({ posts = {
    "topic": "Web Development",
    "userName": "ReactJS",
    "time": "2h",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    "image": "../Images/react.png"
} }) => {
    if (posts.topic != '') {
        return (<li className="list-group-item">
            <img src={posts.image} className="wd-topic-img" />
            <a href="#" className="wd-topic-topicname">{posts.topic}</a><br />
            <a href="#" className="wd-topic-heading">{posts.userName} </a><i className="fa fa-check-circle"></i>
            <span className="wd-topic-time"> - {posts.time}</span><br />
            <span className="wd-topic-description">{posts.title}</span>
        </li>)
    }
    return (<li className="list-group-item">
        <img src={posts.image} className="wd-topic-img" />
        <a href="#" className="wd-topic-heading">{posts.userName} </a><i className="fa fa-check-circle"></i>
        <span className="wd-topic-time"> - {posts.time}</span><br />
        <span className="wd-topic-description">{posts.title}</span>
    </li>
    )
}
export default PostSummaryItem;
