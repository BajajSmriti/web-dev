import { config } from '../constants'
const PROFILE_API = config.url.API_URL+'/api/profile';

export const getCurrentProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profile => {
            dispatch({
                type: 'get-profile',
                profile
            })
        }
        );

export const updateCurrentProfile = (dispatch, profile) =>
    fetch(PROFILE_API, {
        method: 'PUT'
    })
        .then(response =>
            dispatch({
                type: 'update-profile',
                profile
            }));
