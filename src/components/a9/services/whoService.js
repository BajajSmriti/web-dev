const POST_API = '/rest/who';

export const fetchAllWhos = (dispatch) =>
    fetch(POST_API)
        .then(response => response.json())
        .then(who =>
            dispatch({
                type: 'fetch',
                who
            })
        );