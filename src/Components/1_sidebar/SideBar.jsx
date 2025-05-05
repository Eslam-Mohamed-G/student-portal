import React from 'react';
import avatar from "../../assets/avataaars.svg"

export default function SideBar() {
    return (
        <div className='bg-[#925FE2] rounded-lg p-10 text-white flex flex-col justify-center items-center gap-5 min-h-[90vh]'>
            <div className=''>
                <img src={avatar} alt="avatar" className='w-32 h-32' />
            </div>
            <ul className=''>
                <li>Home</li>
                <li>Lecture</li>
                <li>Results</li>
            </ul>
        </div>
    )
}
