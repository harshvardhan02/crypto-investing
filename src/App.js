import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiLoader } from "react-icons/fi";

const loading = (
  <div className="flex flex-row justify-center items-center min-h-screen backdrop-blur-sm">
    <FiLoader className='text-2xl text-black animate-spin' />
  </div>
)

//import containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

//import pages

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/*" element={<TheLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
