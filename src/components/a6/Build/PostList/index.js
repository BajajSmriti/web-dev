import PostItem from "./PostItem";
import posts from "./posts.json";
const WhoToFollowList = () => {
    return (
        <ul className="list-group">
            {posts.map(posts => {
                return (<PostItem key={posts.id} posts={posts} />);
            })
            }
        </ul>
    );

}

export default WhoToFollowList;