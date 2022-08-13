import React, {useContext} from 'react';
import {TodoContext} from "../../../core/context/todoContext";

export const DashboardPage = () => {
    const {todos, ...action} = useContext(TodoContext)

    return (
        <div>
            <h1> Dashboard</h1>
            <h2>You have {todos.length} todos</h2>
            <h2>You have {action.getFavoriteTodos().length} favorite todos</h2>
            <h2>You have {action.getDeletedTodos().length} deleted todos</h2>
            <h2>You have {action.getCompletedTodos().length} completed todos</h2>
        </div>
    );
};
