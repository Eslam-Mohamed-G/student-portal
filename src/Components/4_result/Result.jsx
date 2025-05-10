import React from 'react'
import '../../i18n';
import { useTranslation } from 'react-i18next';

function Result() {
    const { t, i18n } = useTranslation();
    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-secondary dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className='text-primary'>
                        <th scope="col" className="px-2 py-3">
                            {t('results.course')}
                        </th>
                        <th scope="col" className="px-2 py-3">
                            {t('results.grade')}
                        </th>
                        <th scope="col" className="px-2 py-3">
                            {t('results.total')}
                        </th>
                        <th scope="col" className="px-2 py-3">
                            {t('results.year')}
                        </th>
                        <th scope="col" className="px-2 py-3">
                            {t('results.semester')}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                        <th scope="row" className="px-2 py-4 font-medium">
                            {t('courses.course1.name')}
                        </th>
                        <td className="px-2 py-4">
                            {t('courses.course1.grade')}
                        </td>
                        <td className="px-2 py-4">
                            {t('courses.course1.total')}
                        </td>
                        <td className="px-2 py-4">
                            {t('courses.course1.year')}
                        </td>
                        <td className="px-2 py-4">
                            {t('courses.course1.semester')}
                        </td>
                    </tr>

                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                        <th scope="row" className="px-2 py-4 font-medium">
                            {t('courses.course2.name')}
                        </th>
                        <td className="px-2 py-4">
                            {t('courses.course2.grade')}
                        </td>
                        <td className="px-2 py-4">
                            {t('courses.course2.total')}
                        </td>
                        <td className="px-2 py-4">
                            {t('courses.course2.year')}
                        </td>
                        <td className="px-2 py-4">
                            {t('courses.course2.semester')}
                        </td>
                    </tr>

                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                        <th scope="row" className="px-2 py-4 font-medium">
                            {t('courses.course3.name')}
                        </th>
                        <td className="px-2 py-4">
                            {t('courses.course3.grade')}
                        </td>
                        <td className="px-2 py-4">
                            {t('courses.course3.total')}
                        </td>
                        <td className="px-2 py-4">
                            {t('courses.course3.year')}
                        </td>
                        <td className="px-2 py-4">
                            {t('courses.course3.semester')}
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Result