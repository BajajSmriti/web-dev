import React from "react";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen/HomeScreen";
import "../../../vendors/bootstrap/cyborg/bootstrap.min.css"
import './css/explore.css';
import { Route } from 'react-router-dom';
import who from "../Practice/ReduxExamples/reducers/who";
import posts from "../Practice/ReduxExamples/reducers/posts";
import profileData from "../Practice/ReduxExamples/reducers/data";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ProfileScreen from "./ProfileScreen/ProfileScreen";

const reducers = combineReducers({who,posts,profileData})
const store = createStore(reducers);

const Build = () => {
    return (
        <Provider store={store}>
        <Route path="/a9/twitter/explore" component={ExploreScreen}/>
        <Route path="/a9/twitter/home" component={HomeScreen}/>
        <Route path="/a9/twitter/profile" component={ProfileScreen}/>
        </Provider>
    )
};
export default Build;
