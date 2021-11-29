import { config } from '../constants'
const POST_API = config.url.API_URL+'/api/posts';

export const fetchAllPosts = (dispatch) =>
    fetch(POST_API)
        .then(response => response.json())
        .then(posts =>
            dispatch({
                type: 'fetch-all-posts',
                posts
            })
        );

export const createNewPost = (dispatch, newPost) =>{
    newPost = {
        "id": (new Date()).getTime() + '',
        "topic": "Web Development",
        "userName": "ReactJS",
        "verified": false,
        "handle": "ReactJS",
        "time": "2h",
        "userImage": "/images/react.png",
        "comments": 123,
        "retweets": 234,
        "likes": 345,
        "title": newPost.post
    }
    fetch(config.url.API_URL+'/api/posts', {
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
export const deletePost = (dispatch, post) =>
    fetch(`${POST_API}/${post.id}`, {
        method: 'DELETE'
    }).then(response => dispatch({
        type: 'delete-post',
        post
    }));

export const likePost = (dispatch, post) =>
    fetch(`${POST_API}/${post.id}/like`, {
        method: 'PUT'
    })
        .then(response =>
            dispatch({
                type: 'like-post',
                post
            }));




