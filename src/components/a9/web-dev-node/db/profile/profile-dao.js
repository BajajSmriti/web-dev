const model = require('./profile-model');

const getProfile = () => model.find();
const saveProfile = (profile) => {
let upProfile = profile.profileData
console.log(upProfile);
  return model.updateOne({ _id: upProfile._id }, upProfile);
}

module.exports = {
  getProfile, saveProfile
};
