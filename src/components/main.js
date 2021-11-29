import React from "react";
import {Link} from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Link to="/a6">
                A6
            </Link> |
            <Link to="/a7">
                A7
            </Link> |
            <Link to="/a8">
                A8
            </Link> |
            <Link to="/a9">
                A9
            </Link>
        </>
    )
}

export default Main;