import React from "react";
import { Link } from "react-router-dom";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import Styles from "./Styles";
import TodoList from "./Todo/TodoList";

const Practice = () => {
    return (
        <>
            <h1>Practice</h1>
            <Classes />
            <Styles />
            <ConditionalOutput />
            <TodoList />
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/build/explore">
                Build
            </Link>
        </>

    )
};

export default Practice;
