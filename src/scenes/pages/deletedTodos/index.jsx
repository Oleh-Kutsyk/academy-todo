import React, {useContext} from 'react';
import {TodoContext} from "../../../core/context/todoContext";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../../core/routes/routes";
import {Todos} from "../../../components/todos";

export const DeletedTodosPage = () => {
    const {todos, ...action} = useContext(TodoContext)

    const allDeleted = action.getDeletedTodos()

    if (!allDeleted.length) {
        return (
            <React.Fragment>
                <h1>You have no deleted todos!</h1>
                <NavLink className='noTodos' to={ROUTES.allTodos}>Delete todo</NavLink>
            </React.Fragment>
        )
    }

    return (
        <div>
            <h1>Deleted Todos</h1>
            <main className='todosContainer'>
                <Todos type='deleted' todos={allDeleted} {...action}/>
            </main>
        </div>
    );
};
