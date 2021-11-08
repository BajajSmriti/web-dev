import posts from './data/posts.json';

const post = (state = posts, action) => {
    switch (action.type) {
        case 'create-post':
            const post = {
                "id": (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                "title": action.post.post,
                "userImage": "../../../images/react.png",
                // "logo-image": "../../../images/react.png",
                "comments": 123,
                "retweets": 234,
                "likes": 345
            };
            return ([
                post,
                ...state,
            ]
            );

        case 'delete-post':
            return state
                .filter(post => post.id !== action.posts.id);

        case 'like-post':
            return state.map(post => {
                if (post.id === action.posts.id) {
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

