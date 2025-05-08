import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SideBar from '../1_sidebar/SideBar';
import { useTranslation } from 'react-i18next';

function Layout() {
    const location = useLocation();
    const {t} = useTranslation();

    const getPathName = (path) => {
        switch (path) {
            case "/":
                return t('tabs.personal');
            case "/timeTable":
                return t('tabs.courses');
            case "/result":
                return t('tabs.tabsResults');
            default:
                return t('header');
        }
    }
    return (
        <div className='flex items-center h-screen justify-center md:px-10'>
            <div className=''>
                <div className='bg-[#153e6a] text-white text-lg font-bold h-20 w-full fixed top-0 text-center rounded-es-3xl rounded-ee-3xl md:hidden'>
                    <p className='mt-6'>{getPathName(location.pathname)}</p>
                </div>
                <SideBar />
            </div>
            <div className='flex-1 h-screen m-auto px-4 pt-32'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout