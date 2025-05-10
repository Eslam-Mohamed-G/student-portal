import React from 'react'
import { useTranslation } from 'react-i18next';
import '../../i18n';

export default function TimeTable() {
  const { t, i18n } = useTranslation();
  return (
    <div className='container'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-row gap-4 rounded-3xl bg-[#b5c2cf] w-full overflow-hidden'>
          <div className='bg-primary min-w-24 text-white font-bold border-r-2 border-white py-2 px-6 flex flex-col justify-center items-center'>
            <span>8.00</span>
            <span>to</span>
            <span>9.00</span>
          </div>
          <div className='flex flex-col justify-center md:flex-row md:items-center md:justify-between md:w-full md:m-auto px-3 capitalize'>
            <span className='text-primary font-bold md:w-1/3'>{t('timetable.name.operation')}</span>
            <span className='text-secondary md:w-1/3'>{t('timetable.place.room')}: {t('timetable.place.place1')}</span>
            <span className='text-secondary md:w-1/3'>{t('timetable.instructor')}</span>
          </div>
        </div>

        <div className='flex flex-row gap-4 rounded-3xl bg-[#b5c2cf] w-full overflow-hidden'>
          <div className='bg-primary min-w-24 text-white font-bold border-r-2 border-white py-2 px-6 flex flex-col justify-center items-center'>
            <span>9.00</span>
            <span>to</span>
            <span>10.00</span>
          </div>
          <div className='flex flex-col justify-center md:flex-row md:items-center md:justify-between md:w-full md:m-auto px-3 capitalize'>
          <span className='text-primary font-bold md:w-1/3'>{t('timetable.name.programming')}</span>
            <span className='text-secondary md:w-1/3'>{t('timetable.place.room')}: {t('timetable.place.place2')}</span>
            <span className='text-secondary md:w-1/3'>{t('timetable.instructor')}</span>
          </div>
        </div>

        <div className='flex flex-row gap-4 rounded-3xl bg-[#b5c2cf] w-full overflow-hidden'>
          <div className='bg-primary min-w-24 text-white font-bold border-r-2 border-white py-2 px-6 flex flex-col justify-center items-center'>
            <span>10.30</span>
            <span>to</span>
            <span>11.30</span>
          </div>
          <div className='flex flex-col justify-center md:flex-row md:items-center md:justify-between md:w-full md:m-auto px-3 capitalize'>
            <span className='text-primary font-bold md:w-1/3'>{t('timetable.name.algorithms')}</span>
            <span className='text-secondary md:w-1/3'>{t('timetable.place.room')}: {t('timetable.place.place3')}</span>
            <span className='text-secondary md:w-1/3'>{t('timetable.instructor')}</span>
          </div>
        </div>

        <div className='flex flex-row gap-4 rounded-3xl bg-[#b5c2cf] w-full overflow-hidden'>
          <div className='bg-primary min-w-24 text-white font-bold border-r-2 border-white py-2 px-6 flex flex-col justify-center items-center'>
            <span>12.00</span>
            <span>to</span>
            <span>1.00</span>
          </div>
          <div className='flex flex-col justify-center md:flex-row md:items-center md:justify-between md:w-full md:m-auto px-3 capitalize'>
            <span className='text-primary font-bold md:w-1/3'>{t('timetable.name.business')}</span>
            <span className='text-secondary md:w-1/3'>{t('timetable.place.room')}: {t('timetable.place.place4')}</span>
            <span className='text-secondary md:w-1/3'>{t('timetable.instructor')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
