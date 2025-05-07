import React from 'react'
import avatar from "../../assets/avataaars.svg"

function Profile() {
    return (
        <div className='container '>
            <div className=' md:px-5'>
                <div className="flex flex-col items-center bg-[#b5c2cf] border border-gray-200 rounded-2xl shadow-sm md:flex-row md:max-w-xl">
                    <img className="object-cover w-48" src={avatar} alt='personal-img' />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#153e6a]">Eslam mohamed gomaa</h5>
                        <p className="mb-3 font-normal text-[#153e6a]">id:1000140550</p>
                        <p className="mb-3 font-normal text-[#153e6a]">level:Fourth year</p>
                        <p className="mb-3 font-normal text-[#153e6a]">Department:Computer Science</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile