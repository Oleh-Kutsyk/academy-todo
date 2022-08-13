import React from 'react';
import './styled.css';
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../core/routes/routes";


export const SideBar = () => {
    return (
        <div className='sidebar'>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : 'link'} to={ROUTES.dashboard}>dashboard</NavLink>
            <hr/>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : 'link'} to={ROUTES.allTodos}>all</NavLink>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : 'link'} to={ROUTES.favoriteTodos}>favorite</NavLink>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : 'link'} to={ROUTES.completedTodos}>completed</NavLink>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : 'link'} to={ROUTES.deletedTodos}>deleted</NavLink>
        </div>
    );
};