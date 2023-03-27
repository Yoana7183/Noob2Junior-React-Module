import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import ECommerce from './pages/E-CommerceShop';
import GitHub from './pages/GitHub';
import LandingPage from './pages/LandingPage';
import LandingPageEz from './pages/LandingPageEz';
import TipsCalculator from './pages/TipsCalculator';
function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="e-commerce" element={<ECommerce />} />
      <Route path="equalizer" element={<LandingPageEz />} />
      <Route path="github" element={<GitHub />} />
      <Route path="loop-studio" element={<LandingPage />} />
      <Route path="tips-calculator" element={<TipsCalculator />} />
    </Routes>
  );
}
export default App;
