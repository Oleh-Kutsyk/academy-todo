import React from 'react';
import {Outlet} from 'react-router-dom';
import {SideBar} from "../../../components/sideBar";
import {Header} from "../../../components/header";

import './styled.css'

export const MainLayout = () => {
    return (
        <div className='root'>
            <Header/>
            <SideBar/>
            <main className='outlet'>
                <Outlet/>
            </main>
        </div>
    );
};
