import React from "react";
import A6 from "./index";
import History from "../history";
// import { Link } from "react-router-dom";

const HelloWorld = () => {
    return (
        <div>
            <h1>Hello World!</h1>
            {/* <Link to="/a6/practice">
                Practice
            </Link> |
            <Link to="/a6/build">
                Build
            </Link> */}
            <A6/>
            <hr />
            <History />
        </div>

    )
};

export default HelloWorld;
