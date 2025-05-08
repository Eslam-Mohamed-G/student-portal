import React from 'react'

export default function TimeTable() {
  return (
    <div className='container'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-row gap-4 rounded-3xl bg-[#b5c2cf] w-full overflow-hidden'>
          <div className='bg-[#153e6a] min-w-24 text-white font-bold border-r-2 border-white py-2 px-6 flex flex-col justify-center items-center'>
            <span>8.00</span>
            <span>to</span>
            <span>9.00</span>
          </div>
          <div className='flex flex-col justify-center md:flex-row md:items-center md:justify-between md:w-full md:m-auto px-3 capitalize'>
            <span className='text-[#153e6a] font-bold md:w-1/3'>financial accounting</span>
            <span className='text-[#3b9dd4] md:w-1/3'>room: a-11</span>
            <span className='text-[#3b9dd4] md:w-1/3'>dr: ahmed ali</span>
          </div>
        </div>

        <div className='flex flex-row gap-4 rounded-3xl bg-[#b5c2cf] w-full overflow-hidden'>
          <div className='bg-[#153e6a] min-w-24 text-white font-bold border-r-2 border-white py-2 px-6 flex flex-col justify-center items-center'>
            <span>9.00</span>
            <span>to</span>
            <span>10.00</span>
          </div>
          <div className='flex flex-col justify-center md:flex-row md:items-center md:justify-between md:w-full md:m-auto px-3 capitalize'>
            <span className='text-[#153e6a] font-bold md:w-1/3'>marketing</span>
            <span className='text-[#3b9dd4] md:w-1/3'>room: a-12</span>
            <span className='text-[#3b9dd4] md:w-1/3'>dr: ahmed ali</span>
          </div>
        </div>

        <div className='flex flex-row gap-4 rounded-3xl bg-[#b5c2cf] w-full overflow-hidden'>
          <div className='bg-[#153e6a] min-w-24 text-white font-bold border-r-2 border-white py-2 px-6 flex flex-col justify-center items-center'>
            <span>10.30</span>
            <span>to</span>
            <span>11.30</span>
          </div>
          <div className='flex flex-col justify-center md:flex-row md:items-center md:justify-between md:w-full md:m-auto px-3 capitalize'>
            <span className='text-[#153e6a] font-bold md:w-1/3'>finance</span>
            <span className='text-[#3b9dd4] md:w-1/3'>room: b-11</span>
            <span className='text-[#3b9dd4] md:w-1/3'>dr: ahmed ali</span>
          </div>
        </div>

        <div className='flex flex-row gap-4 rounded-3xl bg-[#b5c2cf] w-full overflow-hidden'>
          <div className='bg-[#153e6a] min-w-24 text-white font-bold border-r-2 border-white py-2 px-6 flex flex-col justify-center items-center'>
            <span>12.00</span>
            <span>to</span>
            <span>1.00</span>
          </div>
          <div className='flex flex-col justify-center md:flex-row md:items-center md:justify-between md:w-full md:m-auto px-3 capitalize'>
            <span className='text-[#153e6a] font-bold md:w-1/3'>business management</span>
            <span className='text-[#3b9dd4] md:w-1/3'>room: b-12</span>
            <span className='text-[#3b9dd4] md:w-1/3'>dr: ahmed ali</span>
          </div>
        </div>
      </div>
    </div>
  )
}
