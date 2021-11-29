// import posts from './data/posts.json';

const post = (state = [], action) => {
    switch (action.type) {
        case 'create-post':
            return ([
                action.post,
                ...state,
            ]
            );

        case 'delete-post':
            return state
                .filter(post => post._id !== action.post._id);

        case 'fetch-all-posts':
            return (
                action.posts
            )

        case 'like-post':
            return state.map(post => {
                if (post._id === action.post._id) {
                    if (post.liked === true) {
                        post.liked = false;
                        post.likes--;
                    } else {
                        post.liked = true;
                        post.likes++;
                    }
                    return post;
                } else {
                    return post;
                }
            });
        default:
            return (state);
    }
};

export default post;

