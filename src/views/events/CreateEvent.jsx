import React from 'react'

export default function CreateEvent() {
  return (
    <div className='p-6 dark:bg-black'>
      <h1 className='text-lg font-semibold dark:text-gray-300'>We're still developing the events feature. Please return soon.</h1>
      <div className="p-4 bg-white dark:bg-slate-800 drop-shadow-lg rounded-lg mt-4">
        <div className="grid grid-cols-1 gap-4">
          <div className='flex flex-col'>
            <label className='text-[#6C2FE4] dark:text-gray-300 text-semibold text-lg'>Session Title</label>
            <input className='p-4 bg-gray-100 dark:bg-slate-700 dark:text-gray-300 mt-3 rounded-lg' type="text" defaultValue={''} />
          </div>
          <div className='flex flex-col'>
            <label className='text-[#6C2FE4] dark:text-gray-300 text-semibold text-lg'>Session Description</label>
            <input className='p-4 bg-gray-100 dark:bg-slate-700 dark:text-gray-300 mt-3 rounded-lg' type="text" defaultValue={''} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className='flex flex-col'>
            <label className='text-[#6C2FE4] dark:text-gray-300 text-semibold text-lg'>Timeslot Count</label>
            <input className='p-4 bg-gray-100 dark:bg-slate-700 dark:text-gray-300 mt-3 rounded-lg' type="text" defaultValue={''} />
          </div>
          <div className='flex flex-col'>
            <label className='text-[#6C2FE4] dark:text-gray-300 text-semibold text-lg'>Room Count</label>
            <input className='p-4 bg-gray-100 dark:bg-slate-700 dark:text-gray-300 mt-3 rounded-lg' type="text" defaultValue={''} />
          </div>
          <div className='flex flex-col'>
            <label className='text-[#6C2FE4] dark:text-gray-300 text-semibold text-lg'>Sessions(Mins)</label>
            <input className='p-4 bg-gray-100 dark:bg-slate-700 dark:text-gray-300 mt-3 rounded-lg' type="text" defaultValue={''} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className='flex flex-col'>
            <label className='text-[#6C2FE4] dark:text-gray-300 text-semibold text-lg'>Start Date</label>
            <input className='p-4 bg-gray-100 dark:bg-slate-700 dark:text-gray-300 mt-3 rounded-lg' type="date" defaultValue={''} />
          </div>
          <div className='flex flex-col'>
            <label className='text-[#6C2FE4] dark:text-gray-300 text-semibold text-lg'>Start Time</label>
            <input className='p-4 bg-gray-100 dark:bg-slate-700 dark:text-gray-300 mt-3 rounded-lg' type="time" defaultValue={''} />
          </div>
        </div>
        <button className='bg-[#6C2FE4] text-white font-semibold w-full py-3 rounded-full my-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-white'>Create</button>
      </div>
    </div>
  )
}
