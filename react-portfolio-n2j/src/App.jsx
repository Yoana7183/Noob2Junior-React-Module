import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Navbar from './Navbar';
import Projects from './pages/Projects';
import ECommerce from './pages/E-CommerceShop';
import GitHub from './pages/GitHub';
import LandingPage from './pages/LandingPage';
import LandingPageEz from './pages/LandingPageEz';
import TipsCalculator from './pages/TipsCalculator';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<ErrorPage />}>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Projects />} />
            <Route path="e-commerce" element={<ECommerce />} />
            <Route path="git" element={<GitHub />} />
            <Route path="loopstudio" element={<LandingPage />} />
            <Route path="equalize" element={<LandingPageEz />} />
            <Route path="tipscalc" element={<TipsCalculator />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

// function NotFound() {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold mb-4 text-center text-red-500">
//           Oops!
//         </h1>
//         <p className="text-lg text-gray-800 text-center">Page not found.</p>
//       </div>
//     </div>
//   );
// }

export default App;
