import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";

export default function TheSidebar() {
  return (
    <div className='lg:w-64 md:w-64 sm:w-36 bg-gradient-to-b from-[#6C2FE4] to-[#DD57AC]'>
      <div className="lg:p-14 md:p-14 sm:p-10 p-8 flex justify-center items-center">
        <img className='lg:w-28 lg:h-28 md:w-28 md:h-28 sm:w-16 sm:h-16 w-16 h-16' src="https://www.unit.network/images/Unit-Logo-White.png" alt="" />
      </div>
      <ul className='py-2'>
        <li>
          <Link to='/' className='flex items-center justify-start p-4 hover:bg-[#E6D7F7] hover:text-black w-full text-white text-semibold cursor-pointer'>
            <AiOutlineCalendar className='mr-3' />
            Events
          </Link>
        </li>
        <li>
          <Link to='/profile' className='flex items-center justify-start p-4 hover:bg-[#E6D7F7] hover:text-black w-full text-white text-semibold cursor-pointer'>
            <AiOutlineUser className='mr-3' />
            Profile
          </Link>
        </li>
      </ul>
    </div>
  )
}
