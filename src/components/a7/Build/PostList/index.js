import React from "react";
import PostItem from "./PostItem";
// import posts from "./posts.json";
import { useSelector } from "react-redux";

const PostList = () => {
    const posts = useSelector((state) => state.posts);
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