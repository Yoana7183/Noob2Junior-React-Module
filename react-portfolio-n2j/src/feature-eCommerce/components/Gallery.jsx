import { useState, useEffect, useContext } from 'react';
import { InitialContext } from '../EcommerceShop';
const images = [
  {
    origin: 'src/feature-eCommerce/images/image-product-1.jpg',
    thumbnail: 'src/feature-eCommerce/images/image-product-1-thumbnail.jpg',
  },
  {
    origin: 'src/feature-eCommerce/images/image-product-2.jpg',
    thumbnail: 'src/feature-eCommerce/images/image-product-2-thumbnail.jpg',
  },
  {
    origin: 'src/feature-eCommerce/images/image-product-3.jpg',
    thumbnail: 'src/feature-eCommerce/images/image-product-3-thumbnail.jpg',
  },
  {
    origin: 'src/feature-eCommerce/images/image-product-4.jpg',
    thumbnail: 'src/feature-eCommerce/images/image-product-4-thumbnail.jpg',
  },
];

const Gallery = () => {
  const { initialStateObject, setinitialStateObject } =
    useContext(InitialContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalMenuAboveSMClassOpen, setisModalMenuAboveSMClassOpen] =
    useState(false);

  useEffect(() => {
    setinitialStateObject((prev) => ({
      ...prev,
      isModal: isModalMenuAboveSMClassOpen,
    }));
    initialStateObject;
  }, [isModalMenuAboveSMClassOpen]);

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
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const getCurrentTargetImage = (index) => {
    setCurrentImageIndex(index);
    setisModalMenuAboveSMClassOpen(true);
  };

  const thumbnailImages = images.map((image, index) => (
    <img
      key={index}
      className="lg:w-[88px] lg:h-[88px] sm:w-[66px] sm:h-[66px] sm:ml-1 md:ml-5 rounded-xl cursor-pointer ml-6 hover:border-2 hover:border-ecommerceOrangeColor hover:opacity-60"
      src={image.thumbnail}
      alt="Gallery Image"
      onClick={() => getCurrentTargetImage(index)}
    />
  ));

  return (
    <div>
      {isModalMenuAboveSMClassOpen && (
        <div className=" fixed top-0 left-0 w-full h-full  items-center justify-center hidden sm:flex ">
          <div className="w-full h-full rounded-lg p-8 absolute top-0 left-0 bg-gray-800 bg-opacity-50">
            <div className="flex items-center justify-center ">
              <div className="relative">
                <div className="flex items-center">
                  <div
                    className="rounded-full bg-white w-[56px] h-[56px] flex justify-center cursor-pointer absolute inset-y-15 left-[-30px]"
                    onClick={goToPreviousImage}
                  >
                    <img
                      className="w-[10px] h-[16px] mt-5"
                      src="src\feature-eCommerce\images\icon-previous.svg"
                      alt=""
                      srcSet=""
                    ></img>
                  </div>
                  <div className="md:w-[550px] sm:w-[450px]">
                    <div className="flex justify-end mb-3">
                      <img
                        className="w-8 cursor-pointer  text-orange-400"
                        src="src/feature-eCommerce/images/icon-close.png"
                        alt=""
                        onClick={() => setisModalMenuAboveSMClassOpen(false)}
                      />
                    </div>
                    <img
                      className="md:w-[550px] sm:w-[450px] rounded-xl"
                      src={images[currentImageIndex].origin}
                      alt="Product Image"
                    />
                  </div>

                  <div
                    className="rounded-full bg-white w-[56px] h-[56px] flex justify-center cursor-pointer absolute inset-y-15 right-[-30px] "
                    onClick={goToNextImage}
                  >
                    <img
                      className="w-[10px] h-[16px] mt-5  "
                      src="src\feature-eCommerce\images\icon-next.svg"
                      alt=""
                      srcSet=""
                    ></img>
                  </div>
                </div>
                <div className="sm:flex mt-4 px-4 lg:ml-[5%] sm:ml-[4rem] md:ml-10 hidden">
                  {thumbnailImages}
                </div>
              </div>
            </div>
          </div>
        </div>
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
                src={images[currentImageIndex].origin}
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
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <div className="sm:flex justify-between mt-5 md:ml-[2rem] sm:ml-12 lg:ml-0 hidden sm:w-[350px]">
          {thumbnailImages}
        </div>
      </div>
    </div>
  );
};
export default Gallery;
