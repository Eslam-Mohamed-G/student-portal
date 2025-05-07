import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../1_sidebar/SideBar';

function Layout() {
    return (
        <div className='flex items-center h-screen justify-center md:px-10'>
            <div className=''>
                <div className='bg-[#153e6a] h-20 w-full fixed top-0 rounded-es-3xl rounded-ee-3xl md:hidden' />
                <SideBar />
            </div>
            <div className='flex-1 h-screen mt-48 mx-4'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout