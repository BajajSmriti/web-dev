import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";
const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
            <!-- continue here -->
            ${posts.map(post => {
                    return (PostSummaryItem(post));
                }).join('')
            }
            </ul>
`);
}

export default WhoToFollowList;