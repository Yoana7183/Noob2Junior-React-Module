import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Navbar';
import Projects from './pages/Projects';
import MyResume from './pages/MyResume';
import ECommerce from './pages/E-CommerceShop';
import GitHub from './pages/GitHub';
import LandingPage from './pages/LandingPage';
import LandingPageEz from './pages/LandingPageEz';
import TipsCalculator from './pages/TipsCalculator';
import DictionaryBasic from './pages/Dictionary';
import { ErrorPage } from './pages/ErrorPage';
import Collections from './feature-eCommerce/pages/Collections';
import ProductDetailPage from './feature-eCommerce/pages/ProductDetail';
// import RootLayout from './feature-eCommerce/pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <Projects />,
      },
      {
        path: '/cv',
        element: <MyResume />,
      },
      {
        path: '/e-commerce',
        element: <ECommerce />,
        children: [
          {
            index: true,
            path: '/e-commerce/Collections',
            element: <Collections />,
          },
          {
            path: '/e-commerce/Collections/:productId',
            element: <ProductDetailPage />,
          },
        ],
      },
      {
        path: '/git',
        element: <GitHub />,
      },
      {
        path: '/loopstudio',
        element: <LandingPage />,
      },
      {
        path: '/equalize',
        element: <LandingPageEz />,
      },
      {
        path: '/tipscalc',
        element: <TipsCalculator />,
      },
      {
        path: '/dictionary',
        element: <DictionaryBasic />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
