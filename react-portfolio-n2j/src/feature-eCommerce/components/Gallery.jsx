import React, { useState, useEffect, useContext } from 'react';
import ModalGallery from './ModalGallery';
import { EcommerceContext } from '../context/EcommerceContext';
import { v4 as uuidv4 } from 'uuid';
import Store from '../Store';
import PropTypes from 'prop-types';

const Gallery = ({ id }) => {
  const { setCartStatus, setModalStatus } = useContext(EcommerceContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalMenuAboveSMClassOpen, setIsModalMenuAboveSMClassOpen] =
    useState(false);

  useEffect(() => {
    let newStatus = isModalMenuAboveSMClassOpen ? 'open' : 'closed';
    setModalStatus(newStatus);
  }, [isModalMenuAboveSMClassOpen, setModalStatus]);

  useEffect(() => {
    if (isModalMenuAboveSMClassOpen) {
      setCartStatus('closed');
    }
  }, [isModalMenuAboveSMClassOpen, setCartStatus]);

  const ProductGallery = Store.find(
    (product) => product.id === parseInt(id, 10)
  );

  if (!ProductGallery) {
    return <div>Product not found.</div>;
  }

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const getCurrentTargetImage = (index) => {
    setCurrentImageIndex(index);
    setIsModalMenuAboveSMClassOpen(true);
  };

  const thumbnailImages = ProductGallery.images.map((image, index) => (
    <img
      key={uuidv4()}
      className="lg:w-[88px] lg:h-[88px] sm:w-[66px] sm:h-[66px] sm:ml-1 md:ml-5 rounded-xl cursor-pointer ml-6 hover:border-2 hover:border-ecommerceOrangeColor hover:opacity-60"
      src={image}
      alt={`Gallery Image ${index}`}
      onClick={() => getCurrentTargetImage(index)}
    />
  ));

  return (
    <section>
      {isModalMenuAboveSMClassOpen && (
        <ModalGallery
          ProductGallery={ProductGallery}
          prevImg={goToPreviousImage}
          nextImg={goToNextImage}
          getCurrentImage={getCurrentTargetImage}
          setIsModal={setIsModalMenuAboveSMClassOpen}
          imageIndex={currentImageIndex}
          thumbNail={ProductGallery.images}
        />
      )}

      <div className="lg:w-[445px] lg:h-[565px] xl:w-[445px] xl:h-[565px] md:w-[345px] md:h-[465px] sm:mt-[-12rem] mt-[1rem] lg:pl-16 md:pl-0">
        <div className="sm:h-[445px] h-[calc(100vw-1px)]">
          <div className="sm:w-[445px] sm:h-[445px] w-screen h-[300px] ">
            <div className="sm:hidden relative">
              <div
                className="rounded-full bg-white w-[40px] h-[40px] flex justify-center cursor-pointer absolute inset-y-25 top-[calc(40vw+10px)] left-2"
                onClick={goToPreviousImage}
              >
                <img
                  className="w-[10px] h-[16px] mt-3"
                  src="/assetsECommerce/icon-previous.svg"
                  alt="Prev"
                />
              </div>
              <img
                src={ProductGallery.images[currentImageIndex]}
                alt="ProductImage"
                className=""
              />
              <div
                className="rounded-full bg-white w-[40px] h-[40px] flex justify-center cursor-pointer absolute inset-y-25 top-[calc(40vw+10px)] right-2 "
                onClick={goToNextImage}
              >
                <img
                  className="w-[10px] h-[16px] mt-3  "
                  src="/assetsECommerce/icon-next.svg"
                  alt="Next"
                />
              </div>
            </div>
            <img
              className=" sm:rounded-2xl rounded-none sm:inline hidden "
              src={ProductGallery.images[0]}
              alt="Main-Product"
            />
          </div>
        </div>
        <div className="sm:flex justify-between mt-5 md:ml-[2rem] sm:ml-12 lg:ml-0 hidden sm:w-[350px]">
          {thumbnailImages}
        </div>
      </div>
    </section>
  );
};

Gallery.propTypes = {
  id: PropTypes.string,
};

export default Gallery;
