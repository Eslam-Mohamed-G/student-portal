import React from 'react'
import avatar from "../../assets/avataaars.svg"
import { useTranslation } from 'react-i18next';
import '../../i18n';

function Profile() {
    const { t } = useTranslation();
    return (
        <div className='container md:px-5'>
                <div className="flex items-center bg-[#b5c2cf] rounded-2xl shadow-sm md:max-w-xl md:px-5 md:py-4">
                    <img className="object-cover w-24 md:w-36" src={avatar} alt='personal-img' />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="text-xl font-bold tracking-tight text-[#153e6a]">{t('personalInfo.title')}</h5>
                        <p className="font-normal text-[#153e6a]">{t('personalInfo.id')}</p>
                        <p className="font-normal text-[#153e6a]">{t('personalInfo.level.title')}: {t('personalInfo.level.content')}</p>
                        {/* <p className="font-normal text-[#153e6a]">Department:Computer Science</p> */}
                    </div>
                </div>


            <div>
                <div className="shadow-md sm:rounded-xl lg:w-1/2 mt-4">
                    <h3 className='capitalize font-bold text-xl tracking-tight text-[#153e6a] border-b border-[#153e6a] mb-3'>{t("personalInfo.personalInfo")}</h3>
                    
                    <table className="w-full text-sm text-left rtl:text-right text-[#3b9dd4] capitalize">
                        <tbody>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-[#153e6a]">
                                <th scope="row" className="px-6 py-4 text-[#153e6a] font-bold whitespace-nowrap dark:text-white">
                                {t('personalInfo.studentName.title')}
                                </th>
                                <td className="px-6 py-4">
                                {t('personalInfo.studentName.content')}
                                </td>
                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-[#153e6a]">
                                <th scope="row" className="px-6 py-4 text-[#153e6a] font-bold whitespace-nowrap dark:text-white">
                                {t('personalInfo.fatherName.title')}
                                </th>
                                <td className="px-6 py-4">
                                {t('personalInfo.fatherName.content')}
                                </td>
                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-[#153e6a]">
                                <th scope="row" className="px-6 py-4 text-[#153e6a] font-bold whitespace-nowrap dark:text-white">
                                {t('personalInfo.level.title')}
                                </th>
                                <td className="px-6 py-4">
                                {t('personalInfo.level.content')}
                                </td>
                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 text-[#153e6a] font-bold whitespace-nowrap dark:text-white">
                                {t('personalInfo.grade.title')}
                                </th>
                                <td className="px-6 py-4">
                                {t('personalInfo.grade.content')}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Profile