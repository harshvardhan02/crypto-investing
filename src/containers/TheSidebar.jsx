import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineCalendar,
  AiOutlineUser,
  AiFillApi,
  AiFillGold,
  AiFillSafetyCertificate,
  AiFillBuild
} from "react-icons/ai";

export default function TheSidebar() {
  return (
    <div className='lg:w-64 shadow-md md:w-64 sm:w-36 dark:bg-gradient-to-b from-[#6C2FE4] to-[#DD57AC]'>
      <div className="lg:p-14 md:p-14 sm:p-10 p-8 flex justify-center items-center">
        {localStorage.getItem('DarkMode') ? <img className='lg:w-28 lg:h-28 md:w-28 md:h-28 sm:w-16 sm:h-16 w-16 h-16' src="https://www.unit.network/images/UNIT_Website_Purple.png" alt="" /> : <img className='lg:w-28 lg:h-28 md:w-28 md:h-28 sm:w-16 sm:h-16 w-16 h-16' src="https://www.unit.network/images/Unit-Logo-White.png" alt="" />}
      </div>
      <ul className='py-2'>
        <li>
          <Link to='/sales' className='text-[#6C2FE4] flex items-center justify-start p-4 hover:bg-[#E6D7F7] hover:text-black w-full dark:text-white text-semibold cursor-pointer'>
            <AiFillGold className='mr-3' />
            Sales
          </Link>
        </li>
        <li>
          <Link to='/pro-sales' className='text-[#6C2FE4] flex items-center justify-start p-4 hover:bg-[#E6D7F7] hover:text-black w-full dark:text-white text-semibold cursor-pointer'>
            <AiFillApi className='mr-3' />
            Pro Sales
          </Link>
        </li>
        <li>
          <Link to='/installed-sales' className='text-[#6C2FE4] flex items-center justify-start p-4 hover:bg-[#E6D7F7] hover:text-black w-full dark:text-white text-semibold cursor-pointer'>
            <AiFillSafetyCertificate className='mr-3' />
            Installed Sales
          </Link>
        </li>
        <li>
          <Link to='/total-inventory' className='text-[#6C2FE4] flex items-center justify-start p-4 hover:bg-[#E6D7F7] hover:text-black w-full dark:text-white text-semibold cursor-pointer'>
            <AiFillBuild className='mr-3' />
            Total Inventory
          </Link>
        </li>
        <li>
          <Link to='/' className='text-[#6C2FE4] flex items-center justify-start p-4 hover:bg-[#E6D7F7] hover:text-black w-full dark:text-white text-semibold cursor-pointer'>
            <AiOutlineCalendar className='mr-3' />
            Events
          </Link>
        </li>
        <li>
          <Link to='/profile' className='text-[#6C2FE4] flex items-center justify-start p-4 hover:bg-[#E6D7F7] hover:text-black w-full dark:text-white text-semibold cursor-pointer'>
            <AiOutlineUser className='mr-3' />
            Profile
          </Link>
        </li>
      </ul>
    </div>
  )
}
