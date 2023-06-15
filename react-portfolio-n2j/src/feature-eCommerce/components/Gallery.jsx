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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setinitialStateObject((prev) => ({
      ...prev,
      isModal: isOpen,
    }));
    initialStateObject;
  }, [isOpen]);

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
    setIsOpen(true);
  };

  const thumbnailImages = images.map((image, index) => (
    <img
      key={index}
      className="lg:w-[88px] lg:h-[88px] md:w-[66px] md:h-[66px] rounded-xl cursor-pointer ml-6 hover:border-2 hover:border-ecommerceOrangeColor hover:opacity-60"
      src={image.thumbnail}
      alt="Gallery Image"
      onClick={() => getCurrentTargetImage(index)}
    />
  ));

  return (
    <div>
      {isOpen && (
        <div className=" fixed top-0 left-0 w-full h-full flex items-center justify-center ">
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
                  <div className="w-[550px]">
                    <div className="flex justify-end mb-3">
                      <img
                        className="w-8 cursor-pointer  text-orange-400"
                        src="src/feature-eCommerce/images/icon-close.png"
                        alt=""
                        onClick={() => setIsOpen(false)}
                      />
                    </div>
                    <img
                      className="w-[550px] rounded-xl"
                      src={images[currentImageIndex].origin}
                      alt="Gallery Image"
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
                <div className="sm:flex mt-4 px-4 lg:ml-[5%] md:ml-10 hidden">
                  {thumbnailImages}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="lg:w-[445px] lg:h-[565px] xl:w-[445px] xl:h-[565px] md:w-[345px] md:h-[465px]  sm:mt-[-12rem]  mt-[-16rem] lg:pl-16 md:pl-0">
        <div>
          <div className="sm:w-[445px] sm:h-[445px] w-screen h-[300px]  ">
            <img
              className="sm:rounded-2xl rounded-none"
              src="src\feature-eCommerce\images\image-product-1.jpg"
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <div className="md:flex justify-evenly mt-5 lg:ml-8 md:ml-[4rem] hidden">
          {thumbnailImages}
        </div>
      </div>
    </div>
  );
};
export default Gallery;
