import React from 'react';
import {useNavigate} from "react-router-dom";

import {ROUTES} from "../../core/routes/routes";

import './styled.css';


export const Header = () => {
    const navigate = useNavigate()

    const goToCreateTodo = () => {
      navigate(ROUTES.createTodo)
    }
    return (
        <div className='header'>
            <button onClick={goToCreateTodo}>Add new todo</button>
        </div>
    );
};