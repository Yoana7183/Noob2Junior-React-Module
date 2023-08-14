import React from 'react';
import BackButton from '../components/back-button-navbar';
import EcommerceShop from '../feature-eCommerce/EcommerceShop';
import { EcommerceContextProvider } from '../feature-eCommerce/context/EcommerceContext';
export default function ECommerce() {
  return (
    <>
      <BackButton />
      <EcommerceContextProvider>
        <EcommerceShop />
      </EcommerceContextProvider>
    </>
  );
}
