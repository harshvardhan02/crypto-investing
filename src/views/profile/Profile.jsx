import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiPencil, BiWalletAlt } from "react-icons/bi";
import { FiEyeOff, FiEye } from "react-icons/fi";

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export default function Profile() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className='p-6 dark:bg-black'>
      <h1 className='text-2xl font-bold dark:text-gray-300'>Profile</h1>
      <div className="p-4 bg-[#6C2FE4] dark:bg-slate-800 mt-4">
        <p className="text-white">Information</p>
      </div>
      <div className="p-4 bg-white dark:bg-slate-800 drop-shadow-md mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 flex flex-col items-center bg-gray-100 dark:bg-slate-700 p-8">
            <img className="h-38 w-38 md:h-28 md:w-28 sm:w-28 sm:h-28 rounded-full" src={user.imageUrl} alt="user" />
            <div className="flex justify-center items-center mt-3">
              <BiPencil className='text-[#6C2FE4] dark:text-gray-300 cursor-pointer' />
              <Link className='text-[#6C2FE4] dark:text-gray-300 font-bold text-sm ml-2' to="">Edit Photo</Link>
            </div>
            <button className='flex items-center text-white bg-[#6C2FE4] rounded-md py-1 px-8 mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-500 focus:ring-white'>
              <BiWalletAlt className='mr-2' />
              Wallet
            </button>
          </div>
          <div className="col-span-2 bg-gray-white">
            <div className="grid grid-cols-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
              <div className='flex flex-col'>
                <label className='text-[#6C2FE4] dark:text-gray-300 text-semibold text-lg'>First Name</label>
                <input readOnly className='p-4 bg-gray-100 dark:bg-slate-700 dark:text-gray-300 mt-3' type="text" defaultValue={'Kate'} />
              </div>
              <div className='flex flex-col'>
                <label className='text-[#6C2FE4] dark:text-gray-300 text-semibold text-lg'>Last Name</label>
                <input readOnly className='p-4 bg-gray-100 dark:bg-slate-700 dark:text-gray-300 mt-3' type="text" defaultValue={'Doe'} />
              </div>
              <div className='flex flex-col'>
                <label className='text-[#6C2FE4] dark:text-gray-300 text-semibold text-lg'>Email</label>
                <input readOnly className='p-4 bg-gray-100 dark:bg-slate-700 dark:text-gray-300 mt-3' type="text" defaultValue={'katedoe123@gmail.com'} />
              </div>
              <div className='flex flex-col'>
                <label className='text-[#6C2FE4] dark:text-gray-300 text-semibold text-lg'>Phone</label>
                <input readOnly className='p-4 bg-gray-100 dark:bg-slate-700 dark:text-gray-300 mt-3' type="text" defaultValue={'985-7456-8547'} />
              </div>
              <div className='flex flex-col'>
                <label className='text-[#6C2FE4] dark:text-gray-300 text-semibold text-lg'>Short Description</label>
                <textarea rows={3} className='p-4 bg-gray-100 dark:bg-slate-700 dark:text-gray-300 mt-3' placeholder='Enter Description' type="text" defaultValue={''} />
              </div>
              <div className='flex flex-col'>
                <label className='text-[#6C2FE4] dark:text-gray-300 text-semibold text-lg'>Password</label>
                <div className="flex flex-row items-center bg-gray-100 dark:bg-slate-700 dark:text-gray-300 mt-3">
                  <input readOnly className='p-4 w-full bg-gray-100 dark:bg-slate-700' type={passwordShown ? "text" : "password"} defaultValue={'985-7456-8547'} />
                  <button onClick={togglePassword} className='px-5 rounded-full text-gray-400 hover:text-gray-800 dark:hover:text-white focus:outline-none'>
                    {passwordShown ? <FiEye /> : <FiEyeOff />}
                  </button>
                </div>
              </div>
            </div>
            <div className="p-3 bg-[#6C2FE4] dark:text-gray-300 dark:bg-slate-900 mt-4">
              <p className="text-white">Social Information</p>
            </div>
            <div className="grid grid-cols-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div className='flex flex-col'>
                <label className='text-[#6C2FE4] text-semibold text-lg'>Facebook</label>
                <input readOnly className='p-4 bg-gray-100 dark:bg-slate-700 dark:text-gray-300 mt-3' type="text" defaultValue={'facebook.com'} />
              </div>
              <div className='flex flex-col'>
                <label className='text-[#6C2FE4] dark:text-gray-300 text-semibold text-lg'>Twitter</label>
                <input readOnly className='p-4 bg-gray-100 dark:bg-slate-700 dark:text-gray-300 mt-3' type="text" defaultValue={'twitter.com'} />
              </div>
              <div className='flex flex-col'>
                <label className='text-[#6C2FE4] dark:text-gray-300 text-semibold text-lg'>Linked in</label>
                <input readOnly className='p-4 bg-gray-100 dark:bg-slate-700 dark:text-gray-300 mt-3' type="text" defaultValue={'linkedin.com'} />
              </div>
              <div className='flex flex-col'>
                <label className='text-[#6C2FE4] dark:text-gray-300 text-semibold text-lg'>Pinterest</label>
                <input readOnly className='p-4 bg-gray-100 dark:bg-slate-700 dark:text-gray-300 mt-3' type="text" defaultValue={'pinterest.com'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
