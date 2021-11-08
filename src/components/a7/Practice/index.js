import React from "react";
import { Link } from "react-router-dom";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import ReduxExamples from "./ReduxExamples/components";
import Styles from "./Styles";
import TodoList from "./Todo/TodoList";

const Practice = () => {
    return (
        <>
            <h1>Assignment 7</h1>
            <h1>Practice</h1>
            <Classes />
            <Styles />
            <ConditionalOutput />
            <TodoList />
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a7/twitter/home">
                Build
            </Link>
            <ReduxExamples/>
        </>

    )
};

export default Practice;
