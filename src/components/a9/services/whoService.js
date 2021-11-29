import { config } from '../constants';
const POST_API = config.url.API_URL+'/rest/who';

export const fetchAllWhos = (dispatch) =>
    fetch(POST_API)
        .then(response => response.json())
        .then(who =>
            dispatch({
                type: 'fetch',
                who
            })
        );