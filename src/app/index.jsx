import React from 'react';
import { HashRouter } from "react-router-dom";
import {RenderRoutes} from "../core/routes/renderRoutes";
import {TodoContext} from "../core/context/todoContext";
import {useTodo} from "../hooks/useTodo";

export const App = () => {
    const todo = useTodo();

    return (
        <TodoContext.Provider value={todo}>
            <HashRouter>
                <RenderRoutes/>
            </HashRouter>
        </TodoContext.Provider>
    );
};