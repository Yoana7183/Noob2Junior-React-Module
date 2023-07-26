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
import DictionaryBasic from './pages/Dictionary';
import { ErrorPage } from './pages/ErrorPage';

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
            <Route path="dictionary" element={<DictionaryBasic />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
