import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function OutsideClickHandler({ children, onOutsideClick }) {
  const wrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && wrapperRef.current.contains(event.target)) {
      onOutsideClick();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
}

OutsideClickHandler.propTypes = {
  children: PropTypes.node.isRequired,
  onOutsideClick: PropTypes.func.isRequired,
};

export default OutsideClickHandler;
