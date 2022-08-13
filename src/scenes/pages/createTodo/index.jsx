import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";

import {TodoContext} from "../../../core/context/todoContext";
import {ROUTES} from "../../../core/routes/routes";

export const CreateTodoPage = () => {
    const navigate = useNavigate()
    const {addTodo} = useContext(TodoContext)

    const createTodo = (event) => {
        event.preventDefault();
        addTodo(event.target.title.value)
        event.target[0].value = ''
        navigate(ROUTES.allTodos)
    }
    return (
        <React.Fragment>
            <h1>CreateTodoPage</h1>
            <form className='createForm' onSubmit={createTodo}>
                <input className='input' type="text" name='title'/>
                <button type='submit'>create</button>
            </form>
        </React.Fragment>
    );
};