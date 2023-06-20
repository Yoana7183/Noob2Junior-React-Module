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
                className="rounded-full bg-white w-[56px] h-[56px] flex justify-center cursor-pointer absolute inset-y-15 left-[-30px]"
                onClick={props.prevImg}
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
                    onClick={() => props.setIsModal(false)}
                  />
                </div>
                <img
                  className="md:w-[550px] sm:w-[450px] rounded-xl"
                  src={ProductGallery[props.imageIndex].origin}
                  alt="Product Image"
                />
              </div>

              <div
                className="rounded-full bg-white w-[56px] h-[56px] flex justify-center cursor-pointer absolute inset-y-15 right-[-30px] "
                onClick={props.nextImg}
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
