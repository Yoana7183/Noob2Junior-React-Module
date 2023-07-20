import React from 'react';
import BackButton from '../components/back-button-navbar';
import Tips_Calculator from '../feature-tips-calculator/Tips_Calculator';
import TipsCalculatorContextProvider from '../feature-tips-calculator/context/TipsCalculatorContext-file';
export default function TipsCalculator() {
  return (
    <>
      <BackButton />
      <TipsCalculatorContextProvider>
        <Tips_Calculator />
      </TipsCalculatorContextProvider>
    </>
  );
}
