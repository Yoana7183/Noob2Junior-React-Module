import { useState } from 'react';
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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
      className="w-[88px] h-[88px] rounded-xl cursor-pointer"
      src={image.thumbnail}
      alt="Gallery Image"
      onClick={() => getCurrentTargetImage(index)}
    />
  ));

  return (
    <div>
      {isOpen && (
        <div className=" fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="s rounded-lg p-8">
            <div className="flex items-center">
              <div className="mr-4">
                <span className=""></span>
                <img
                  className="w-12 cursor-pointer"
                  src="src/feature-eCommerce/images/icon-close.svg"
                  alt=""
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <div className="relative">
                <div className="flex items-center">
                  <button
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md mr-2"
                    onClick={goToPreviousImage}
                  >
                    Prev
                  </button>
                  <img
                    className="w-64"
                    src={images[currentImageIndex].origin}
                    alt="Gallery Image"
                  />
                  <button
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md ml-2"
                    onClick={goToNextImage}
                  >
                    Next
                  </button>
                </div>
                <div className="flex mt-4">{thumbnailImages}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-[445px] h-[565px] mt-[-12rem]  pl-16 ">
        <div>
          <div className="w-[445px] h-[445px]">
            <img
              className="rounded-2xl"
              src="src\feature-eCommerce\images\image-product-1.jpg"
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <div className="flex justify-evenly mt-5">{thumbnailImages}</div>
      </div>
    </div>
  );
};
export default Gallery;
