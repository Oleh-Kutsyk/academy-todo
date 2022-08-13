import React from 'react';
import {Todo} from "../todo";

export const Todos = ({todos, type, ...action}) => {

    return (
        <React.Fragment>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} type={type} {...action}/>
            ))}
        </React.Fragment>
    );
};