import React, {useContext} from 'react';
import {TodoContext} from "../../../core/context/todoContext";

import {Todos} from "../../../components/todos";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../../core/routes/routes";

export const AllTodosPage = () => {
    const {todos, ...action} = useContext(TodoContext)

    if (!todos.filter(todo => !todo.isDeleted).length) {
        return (
            <React.Fragment>
                <h1>You have no todos!</h1>
                <NavLink className='noTodos' to={ROUTES.createTodo}>Create one</NavLink>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <h1>All Todos</h1>
            <main className='todosContainer'>
                <Todos type='all'  todos={todos.filter(todo => !todo.isDeleted)} {...action}/>
            </main>
        </React.Fragment>
    );
};
