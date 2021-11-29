const POST_API = 'http://localhost:4000/api/posts';

export const fetchAllPosts = (dispatch) =>
    fetch(POST_API)
        .then(response => response.json())
        .then(posts =>
            dispatch({
                type: 'fetch-all-posts',
                posts
            })
        );

export const createNewPost = (dispatch, newPost) => {
    newPost = {
        // "_id": (new Date()).getTime() + '',
        "topic": "Web Development",
        "userName": "ReactJS",
        "verified": false,
        "handle": "ReactJS",
        "time": "2h",
        "userImage": "/images/react.png",
        "comments": 123,
        "retweets": 234,
        "likes": 345,
        "title": newPost.post,
        "liked": false
    }
    fetch(POST_API, {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(post =>
            dispatch({
                type: 'create-post',
                post
            })
        );
}

export const deletePost = (dispatch, post) => {
    fetch(`${POST_API}/${post._id}`, {
        method: 'DELETE'
    }).then(response => {
        dispatch({
            type: 'delete-post',
            post
        })
    });

}

export const likePost = (dispatch, post) => {
    //change post for db nd dispatch
    fetch(`${POST_API}/${post._id}/like`, {
        method: 'PUT',
        body: JSON.stringify(post),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response =>
            dispatch({
                type: 'like-post',
                post
            }));
}





