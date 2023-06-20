import React from 'react';
import PropTypes from 'prop-types';
import ProductGallery from './images';
const ModalGallery = (props) => {
  return (
    <div className=" fixed top-0 left-0 w-full h-full  items-center justify-center hidden sm:flex ">
      <div className="w-full h-full rounded-lg p-8 absolute top-0 left-0 bg-gray-800 bg-opacity-50">
        <div className="flex items-center justify-center ">
          <div className="relative">
            <div className="flex items-center">
              <div
                className="rounded-full bg-white w-[56px] h-[56px] flex justify-center cursor-pointer absolute inset-y-15 left-[-30px]  hover:bg-center bg-[url('/src/feature-eCommerce/images/icon-previous.svg')] bg-no-repeat bg-center hover:bg-[url('/src/feature-eCommerce/images/icons8-previous-26.png')]"
                onClick={props.prevImg}
              ></div>
              <div className="md:w-[550px] sm:w-[450px]">
                <div
                  className="flex justify-end mb-1 "
                  onClick={() => props.setIsModal(false)}
                >
                  <div className="w-[34px] h-[36px] mb-3 bg-no-repeat bg-cover bg-[url('/src/feature-eCommerce/images/icon-close.svg')] hover:bg-[url('/src/feature-eCommerce/images/icon-close_hover.png')] "></div>
                </div>
                <img
                  className="md:w-[550px] sm:w-[450px] rounded-xl"
                  src={ProductGallery[props.imageIndex].origin}
                  alt="Product Image"
                />
              </div>

              <div
                className="rounded-full bg-white w-[56px] h-[56px] flex justify-center cursor-pointer absolute inset-y-15 right-[-30px] bg-[url('/src/feature-eCommerce/images/icon-next.svg')] bg-no-repeat bg-center hover:bg-[url('/src/feature-eCommerce/images/icons8-next-26.png')] "
                onClick={props.nextImg}
              ></div>
            </div>
            <div className="sm:flex mt-4 px-4 lg:ml-[5%] sm:ml-[4rem] md:ml-10 hidden">
              {props.thumbNail}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalGallery;

ModalGallery.propTypes = {
  prevImg: PropTypes.func.isRequired,
  nextImg: PropTypes.func.isRequired,
  getCurrentImage: PropTypes.func.isRequired,
  setIsModal: PropTypes.func.isRequired,
  imageIndex: PropTypes.number.isRequired,
  thumbNail: PropTypes.any.isRequired,
};
