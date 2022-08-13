import React, {useContext} from 'react';
import {TodoContext} from "../../../core/context/todoContext";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../../core/routes/routes";
import {Todos} from "../../../components/todos";

export const FavoriteTodosPage = () => {
    const {todos, ...action} = useContext(TodoContext)

    const allFavorite = action.getFavoriteTodos()

    if (!allFavorite.length) {
        return (
            <React.Fragment>
                <h1>You have no favorite todos!</h1>
                <NavLink className='noTodos' to={ROUTES.createTodo}>Create new todo firstly</NavLink>
            </React.Fragment>
        )
    }
    return (
        <div>
            <h1>Favorite Todos</h1>
            <main className='todosContainer'>
                <Todos type='all' todos={allFavorite} {...action}/>
            </main>
        </div>
    );
};
