import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../1_sidebar/SideBar';

function Layout() {
    return (
        <div className='flex items-center h-screen justify-center md:px-10'>
            <div className=''>
                <SideBar />
            </div>
            <div className='flex-1'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout