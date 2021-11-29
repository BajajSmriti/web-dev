// const profileData = require('../../Practice/ReduxExamples/reducers/data/profileData.json');
const dao = require('../db/profile/profile-dao');

module.exports = (app) => {

    const getProfile = (req, res) => {
        dao.getProfile()
        .then(profileData => res.json(profileData));
    }

    const saveProfile = (req, res) => {
        dao.saveProfile(req.body)
        .then(status => {
            res.send(status)})
    }

    app.put('/api/profile', saveProfile);

    app.get('/api/profile', getProfile);
};
