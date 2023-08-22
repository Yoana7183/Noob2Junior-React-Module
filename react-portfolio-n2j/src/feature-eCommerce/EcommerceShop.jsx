import React, { useContext, useRef, useEffect } from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import Gallery from './components/Gallery';
import InformationContainer from './components/InformationContainer';
import { EcommerceContext } from './context/EcommerceContext';

const EcommerceShop = () => {
  const modalStatus = useContext(EcommerceContext);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const bodyBackgroundStyleInModal = `${
    modalStatus === 'open'
      ? `bg-grey-800 font-kumbhSans flex justify-center pt-16 h-[1200px] z-10 h-screen overflow-y-auto  `
      : `font-kumbhSans flex justify-center sm:pt-16 pt-5 h-screen overflow-y-auto `
  }`;
  return (
    <main ref={contentRef} className={bodyBackgroundStyleInModal}>
      <div className="xl:w-[1110px] xl:h-[940px] lg:w-[1000px] lg:h-[840px] md:w-[768px] sm:w-[640px] md:h-[840px] h-[calc(120vw+550px)] overflow-hidden ">
        <div className="">
          <Header />
          <Cart />
          <div className="w-[1015px] h-[565px] md:flex md:justify-between sm:flex-col sm:gap-0 gap-44 md:flex-row">
            <Gallery />
            <div className="sm:pl-0 pl-5 ">
              <InformationContainer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EcommerceShop;
