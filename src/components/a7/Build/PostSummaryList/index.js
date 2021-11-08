import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import posts from "./posts.json";
const PostSummaryList = () => {
    return (
        <ul className="list-group">
            {posts.map((posts) => {
                return (<PostSummaryItem key={posts.id} posts={posts}></PostSummaryItem>);
            })
            }
        </ul>
    );
}

export default PostSummaryList;