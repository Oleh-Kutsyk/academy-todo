import React, {useContext} from 'react';
import {TodoContext} from "../../../core/context/todoContext";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../../core/routes/routes";
import {Todos} from "../../../components/todos";

export const CompletedTodosPage = () => {
    const {todos, ...action} = useContext(TodoContext)

    const allCompleted = action.getCompletedTodos()

    if (!allCompleted.length) {
        return (
            <React.Fragment>
                <h1>You have no completed todos!</h1>
                <NavLink className='noTodos' to={ROUTES.createTodo}>Create new one firstly</NavLink>
            </React.Fragment>
        )
    }

    return (
        <div>
            <h1>Completed Todos</h1>
            <main className='todosContainer'>
                <Todos type='all' todos={allCompleted} {...action}/>
            </main>
        </div>
    );
};
