import data from './data/profileData.json';

const profileData = (state = data, action) => {
    switch (action.type) {
        case 'create-profileData':
            return state.map(data => {
                if (data.id === action.profileData.id) {
                    return data;
                } else {
                    return data;
                }
            });
        
        default:
            return (state);

    }
};

export default profileData;

