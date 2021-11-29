// import whoJson from './data/who.json';

const who = (state = [], action) => {

    return action.who||state;
};

export default who;
