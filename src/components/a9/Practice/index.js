import React from "react";
import { Link } from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";
import APIExamples from "./APIExamples";
import Movies from './Movies';
const Practice = () => {
    return (
        <div>
            <h1>Assignment 9</h1>
            <h1>Practice</h1>
            <Link to="/a9/twitter/home">Twitter</Link>
            <Movies/>
            <APIExamples />
            <ReduxExamples />
        </div>
    )
};
export default Practice;
