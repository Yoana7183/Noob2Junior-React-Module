import { useState, useEffect, useContext } from 'react';
import { InitialContext } from '../EcommerceShop';
import ModalGallery from './ModalGallery';
import ProductGallery from './images';

const Gallery = () => {
  const { initialStateObject, setinitialStateObject } =
    useContext(InitialContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalMenuAboveSMClassOpen, setisModalMenuAboveSMClassOpen] =
    useState(false);
  // dynamically updating the context every time the modal gallery is opened or closed
  useEffect(() => {
    setinitialStateObject((prev) => ({
      ...prev,
      isModal: isModalMenuAboveSMClassOpen,
    }));
    initialStateObject;
  }, [isModalMenuAboveSMClassOpen]);
  //dynamically updating the context every time the modal gallery is opened or closed
  useEffect(() => {
    if (isModalMenuAboveSMClassOpen) {
      setinitialStateObject((prev) => ({
        ...prev,
        isCartOpen: false,
      }));
    }
  }, [isModalMenuAboveSMClassOpen]);
  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? ProductGallery.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === ProductGallery.length - 1 ? 0 : prevIndex + 1
    );
  };
  const getCurrentTargetImage = (index) => {
    setCurrentImageIndex(index);
    setisModalMenuAboveSMClassOpen(true);
  };

  const thumbnailImages = ProductGallery.map((image, index) => (
    <img
      key={index}
      className="lg:w-[88px] lg:h-[88px] sm:w-[66px] sm:h-[66px] sm:ml-1 md:ml-5 rounded-xl cursor-pointer ml-6 hover:border-2 hover:border-ecommerceOrangeColor hover:opacity-60"
      src={image.thumbnail}
      alt="Gallery Image"
      onClick={() => getCurrentTargetImage(index)}
    />
  ));

  return (
    <section>
      {isModalMenuAboveSMClassOpen && (
        <ModalGallery
          prevImg={goToPreviousImage}
          nextImg={goToNextImage}
          getCurrentImage={getCurrentTargetImage}
          setIsModal={setisModalMenuAboveSMClassOpen}
          imageIndex={currentImageIndex}
          thumbNail={thumbnailImages}
        />
      )}

      <div className="lg:w-[445px] lg:h-[565px] xl:w-[445px] xl:h-[565px] md:w-[345px] md:h-[465px]  sm:mt-[-12rem]  mt-[-16rem] lg:pl-16 md:pl-0">
        <div className="sm:h-[445px] h-[calc(100vw-1px)]">
          <div className="sm:w-[445px] sm:h-[445px] w-screen h-[300px] ">
            <div className="sm:hidden">
              <div
                className="rounded-full bg-white w-[40px] h-[40px] flex justify-center cursor-pointer absolute inset-y-25 top-[calc(50vw+120px)] left-2"
                onClick={goToPreviousImage}
              >
                <img
                  className="w-[10px] h-[16px] mt-3"
                  src="src\feature-eCommerce\images\icon-previous.svg"
                  alt="Prev"
                  srcSet=""
                ></img>
              </div>
              <img
                src={ProductGallery[currentImageIndex].origin}
                alt="ProductImage"
                srcSet=""
                className=""
              />
              <div
                className="rounded-full bg-white w-[40px] h-[40px] flex justify-center cursor-pointer absolute inset-y-25 top-[calc(50vw+120px)] right-2 "
                onClick={goToNextImage}
              >
                <img
                  className="w-[10px] h-[16px] mt-3  "
                  src="src\feature-eCommerce\images\icon-next.svg"
                  alt="Next"
                  srcSet=""
                ></img>
              </div>
            </div>
            <img
              className=" sm:rounded-2xl rounded-none sm:inline hidden "
              src="src\feature-eCommerce\images\image-product-1.jpg"
              alt="Main-Product"
              srcSet=""
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
export default Gallery;
