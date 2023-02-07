import React from 'react';
import {
  TheContent,
  TheSidebar,
  // TheFooter,
  TheHeader
} from './';

export default function TheLayout() {
  return (
    <div className='flex flex-row min-h-screen'>
      <TheSidebar />
      <div className='flex flex-1 flex-col min-h-screen'>
        <TheHeader />
        <div className='flex flex-col grow'>
          <TheContent />
        </div>
      </div>
    </div>
  )
}
