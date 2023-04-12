import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Projects from './pages/Projects';
import ECommerce from './pages/E-CommerceShop';
import GitHub from './pages/GitHub';
import LandingPage from './pages/LandingPage';
import LandingPageEz from './pages/equalizer/Equalizer';
import TipsCalculator from './pages/TipsCalculator';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Projects />} />
          <Route path="e-commerce" element={<ECommerce />} />
          <Route path="git" element={<GitHub />} />
          <Route path="loopstudio" element={<LandingPage />} />
          <Route path="equalize" element={<LandingPageEz />} />
          <Route path="tipscalc" element={<TipsCalculator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
