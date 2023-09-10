import React from 'react';
import PropTypes from 'prop-types';

/**
 * Modal gallery component for displaying images in a modal.
 * @component
 *
 * @param {Object} props - The component props.
 * @param {Function} props.prevImg - Function to display the previous image.
 * @param {Function} props.nextImg - Function to display the next image.
 * @param {Function} props.getCurrentImage - Function to get the current image.
 * @param {Function} props.setIsModal - Function to control the modal visibility.
 * @param {number} props.imageIndex - The index of the current image.
 * @param {any} props.thumbNail - Thumbnail component or elements.
 *
 * @returns {JSX.Element} - A JSX element representing the modal gallery.
 */
const ModalGallery = (props) => {
  console.log(props.ProductGallery.images[props.imageIndex]);
  return (
    <section className="fixed top-0 left-0 w-full h-full items-center justify-center hidden sm:flex">
      <div className="w-full h-full rounded-lg p-8 absolute top-0 left-0 bg-gray-800 bg-opacity-50">
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="flex items-center">
              {/* Previous Image Button */}
              <div
                className="rounded-full bg-white w-[56px] h-[56px] flex justify-center cursor-pointer absolute inset-y-15 left-[-30px] hover:bg-center bg-[url('/assetsECommerce/icon-previous.svg')] bg-no-repeat bg-center hover:bg-[url('/assetsECommerce/icons8-previous-26.png')]"
                onClick={props.prevImg}
              ></div>

              {/* Main Image */}
              <div className="w-[450px]">
                <div
                  className="flex justify-end mb-1 "
                  onClick={() => props.setIsModal(false)}
                >
                  {/* Close Icon */}
                  <div className="w-[34px] h-[36px] mb-3 bg-no-repeat bg-cover bg-[url('/assetsECommerce/icons8-close.svg')] hover:bg-[url('/assetsECommerce/icon-close_hover.png')] "></div>
                </div>
                {/* Product Image */}
                <img
                  className="w-[450px] rounded-xl"
                  src={props.ProductGallery.images[props.imageIndex]}
                  alt="Product Image"
                />
              </div>

              {/* Next Image Button */}
              <div
                className="rounded-full bg-white w-[56px] h-[56px] flex justify-center cursor-pointer absolute inset-y-15 sm:right-[-30px] md:right-[-30px] lg:right-[-20px] right-[70px] bg-[url('/assetsECommerce/icon-next.svg')] bg-no-repeat bg-center hover:bg-[url('/assetsECommerce/icons8-next-26.png')] "
                onClick={props.nextImg}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// PropTypes for validating the component props
ModalGallery.propTypes = {
  prevImg: PropTypes.func.isRequired,
  nextImg: PropTypes.func.isRequired,
  getCurrentImage: PropTypes.func.isRequired,
  setIsModal: PropTypes.func.isRequired,
  imageIndex: PropTypes.number.isRequired,
  thumbNail: PropTypes.any.isRequired,
  ProductGallery: PropTypes.any.isRequired,
};

export default ModalGallery;
