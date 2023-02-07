import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import routes from '../routes';
import { FiLoader } from "react-icons/fi";

const loading = (
  <div className="flex flex-row justify-center items-center min-h-screen backdrop-blur-sm">
    <FiLoader className='text-2xl text-black animate-spin' />
  </div>
)

export default function TheContent() {
  return (
    <main className='basis-auto shrink-0 grow min-w-0'>
      <Suspense fallback={loading}>
        <Routes>
          {routes.map((route, idx) => {
            return route.component && (
              <Route
                key={idx}
                path={route.path}
                name={route.name}
                element={<route.component />}
              />
            )
          })}
          {/* <Navigate from="/" to="/login" />  */}
        </Routes>
      </Suspense>
    </main>
  )
}
