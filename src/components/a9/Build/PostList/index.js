import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PostItem from "./PostItem";
import {fetchAllPosts} from "../../services/TwitterService";
// import posts from "./posts.json";

const PostList = () => {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    useEffect(() => fetchAllPosts(dispatch), [])
    return (
        <ul className="list-group">
            {posts.map(posts => {
                return (<PostItem key={posts.id} posts={posts} />);
            })
            }
        </ul> 
    );

}

export default PostList;
