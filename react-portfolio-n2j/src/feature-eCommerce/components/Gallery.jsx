import React from 'react';

const Gallery = () => {
  return (
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
      <div className="flex justify-evenly mt-5">
        <img
          className="w-[88px] h-[88px] rounded-xl"
          src="src\feature-eCommerce\images\image-product-1-thumbnail.jpg"
          alt=""
          srcSet=""
        />
        <img
          className="w-[88px] h-[88px] rounded-xl "
          src="src\feature-eCommerce\images\image-product-2-thumbnail.jpg"
          alt=""
          srcSet=""
        />
        <img
          className="w-[88px] h-[88px] rounded-xl"
          src="src\feature-eCommerce\images\image-product-3-thumbnail.jpg"
          alt=""
          srcSet=""
        />
        <img
          className="w-[88px] h-[88px] rounded-xl "
          src="src\feature-eCommerce\images\image-product-4-thumbnail.jpg"
          alt=""
          srcSet=""
        />
      </div>
    </div>
  );
};

export default Gallery;
