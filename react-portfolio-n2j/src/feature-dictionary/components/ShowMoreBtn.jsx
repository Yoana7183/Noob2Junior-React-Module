import React from 'react';
import PropTypes from 'prop-types';
const ShowMoreBtn = ({ handlerPropery, PropertyName }) => {
  return (
    <button
      className="bg-gradient-to-r from-teal-800 to-teal-600 hover:from-teal-700 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent py-3 px-6 text-white font-normal w-[80%] sm:w-[200px] rounded-md text-sm md:text-base mt-3 transition duration-500 ease-in-out transform hover:scale-105 shadow-md ring-2 ring-teal-700"
      onClick={() => handlerPropery(PropertyName)}
    >
      <div className="shadow-inner flex ">
        Show More <p className="capitalize pl-1">{PropertyName}</p>
      </div>
    </button>
  );
};

export default ShowMoreBtn;
ShowMoreBtn.propTypes = {
  handlerPropery: PropTypes.func.isRequired,
  PropertyName: PropTypes.string.isRequired,
};
