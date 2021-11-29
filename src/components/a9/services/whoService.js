const POST_API = 'http://localhost:4000/rest/who';

export const fetchAllWhos = (dispatch) =>
    fetch(POST_API)
        .then(response => response.json())
        .then(who =>
            dispatch({
                type: 'fetch',
                who
            })
        );