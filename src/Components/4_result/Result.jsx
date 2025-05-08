import React from 'react'

function Result() {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-[#3b9dd4] dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className='text-[#153e6a]'>
                        <th scope="col" className="px-2 py-3">
                        Name
                        </th>
                        <th scope="col" className="px-2 py-3">
                        Grade
                        </th>
                        <th scope="col" className="px-2 py-3">
                        Total
                        </th>
                        <th scope="col" className="px-2 py-3">
                        Year
                        </th>
                        <th scope="col" className="px-2 py-3">
                        Semester
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                        <th scope="row" className="px-2 py-4 font-medium">
                            Apple
                        </th>
                        <td className="px-2 py-4">
                            Silver
                        </td>
                        <td className="px-2 py-4">
                            Laptop
                        </td>
                        <td className="px-2 py-4">
                            $2999
                        </td>
                        <td className="px-2 py-4">
                            <a href="#" className="font-medium">Edit</a>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}

export default Result