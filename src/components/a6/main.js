import React from "react";
import Build6 from "./Build";
import HomeScreen6 from "./Build/HomeScreen/HomeScreen";
import HelloWorld from "./HelloWorld";
import Practice6 from "./Practice";
import { BrowserRouter, Route } from 'react-router-dom';

const A6 = () => {
    return (
        <BrowserRouter>
            <Route path="/a6/hello" exact={true}>
                <HelloWorld />
            </Route>
            <Route path={["/a6", "/a6/practice"]} exact={true}>
                <Practice6 />
            </Route>
            <Route path="/a6/build/explore" exact={true}>
                <Build6 />
            </Route>
            <Route path="/a6/build/home" exact={true}>
                <HomeScreen6 />
            </Route>
        </BrowserRouter>
    )
};

export default A6;