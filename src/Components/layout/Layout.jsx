import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../1_sidebar/SideBar';

function Layout() {
    return (
        <div className='flex'>
            <SideBar/>
            <Outlet />
        </div>
    )
}

export default Layout