import data from './data/profileData.json';

const profileData = (state = data, action) => {
    switch (action.type) {
        case 'update-profile':
            return state.map(data => {
                return data
            });

        case 'get-profile':
            return (
                action.profile
            )

        default:
            return state;

    }
};

export default profileData;

