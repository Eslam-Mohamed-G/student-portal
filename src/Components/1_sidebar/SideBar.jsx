import React, { useEffect, useState } from 'react';
import avatar from "../../assets/avataaars.svg"
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../i18n';

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenu = () => {
        setIsOpen(!isOpen);
    };

    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
        localStorage.setItem('i18nextLng', lng);
    };

    const [language, setLanguage] = useState(false);
    const handleLanguage = () => {
        setLanguage(!language)
    };

    useEffect(() => {
        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    }, [i18n.language]);
    return (
        <div className="bg-primary text-white flex flex-col fixed top-0 z-50 items-center gap-5 min-h-screen md:min-h-[90vh] md:rounded-3xl capitalize md:relative">
            {/* responsive button */}
            <button onClick={handleMenu} className={`block md:hidden absolute top-6 ${isOpen ? "end-2" : "-end-10"}`}>
                {isOpen ?
                    <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>

                    :
                    <svg className="w-6 h-6 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                }
            </button>

            <div className={`${isOpen ? "w-64 px-10" : "w-0"} md:w-64 md:px-10 pt-14 transition-all duration-300 overflow-hidden`}>
                {/* avatar */}
                <div className='flex flex-col gap-4 justify-between items-center  w-full'>
                    <div className={`md:w-32 md:h-32 ${isOpen ? "w-32 h-32" : "w-12 h-12"} transition-all duration-300`}>
                        <img src={avatar} alt="avatar" className='w-full' />
                    </div>
                    <h2 className={`text-xl font-bold md:block ${isOpen ? "block" : "hidden"}`}>{t('header')}</h2>
                </div>

                {/* menu */}
                <nav className='mt-4 flex-1'>
                    <ul className='text-center transition-all duration-300'>
                        <li className='hover:text-white transition-all duration-200'>
                            <NavLink to={'/'} onClick={() => { handleMenu() }} className={`navLink ${isOpen ? "ps-4": "justify-center"}`}>
                                <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                                </svg>
                                <span className={`md:block ${isOpen ? "block" : "hidden"}`}>{t('tabs.personal')}</span>
                            </NavLink>
                        </li>

                        <li className='hover:text-white transition-all duration-200'>
                            <NavLink to={'timeTable'} onClick={() => { handleMenu() }}  className={`navLink ${isOpen ? "ps-4": "justify-center"}`}>
                                <svg className="w-6 h-6 text-white block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path fill="currentColor" d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z" />
                                </svg>
                                <span className={`md:block ${isOpen ? "block" : "hidden"}`}>{t('tabs.courses')}</span>
                            </NavLink>
                        </li>
                        <li className='hover:text-white transition-all duration-200'>
                            <NavLink to={'result'} onClick={() => { handleMenu() }}  className={`navLink ${isOpen ? "ps-4": "justify-center"}`}>
                                <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 19">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 12 5.419 3.871A1 1 0 0 0 16 15.057V2.943a1 1 0 0 0-1.581-.814L9 6m0 6V6m0 6H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7m-5 6h3v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5Zm15-3a3 3 0 0 1-3 3V6a3 3 0 0 1 3 3Z" />
                                </svg>
                                <span className={`md:block ${isOpen ? "block" : "hidden"}`}>{t('tabs.tabsResults')}</span>
                            </NavLink>
                        </li>

                        {/* li for changelangue */}
                        <li className='flex flex-col text-white mt-4'>
                            { localStorage.getItem('i18nextLng') === 'ar'
                                ?
                                <button onClick={() => { changeLanguage('en'); handleLanguage() }} className="bg-secondary cursor-pointer rounded-3xl transition-all duration-200 p-3"><span className='hidden md:block'>English</span><span className='block md:hidden'>{isOpen?"English":"EN"}</span></button>
                                :
                                <button onClick={() => { changeLanguage('ar'); handleLanguage() }} className="bg-secondary cursor-pointer rounded-3xl transition-all duration-200 p-3"><span className='hidden md:block'>العربية</span><span className='block md:hidden'>{isOpen ? "العربية": "AR"}</span></button>
                            }
                        </li>
                    </ul>
                </nav>
            </div>


        </div>
    )
}
