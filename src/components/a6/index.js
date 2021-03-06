import React from "react";
import {Link} from "react-router-dom";

const A6 = () => {
  return (
      <>
        <h2>Assignment 6</h2>
        <Link to="/a6/practice">
          Practice
        </Link> | &nbsp;
        <Link to="/a6/build/explore">
          Build
        </Link> | &nbsp;
        <Link to="/a6/build/home">
          Challenge
        </Link>
      </>
  )
};

export default A6;