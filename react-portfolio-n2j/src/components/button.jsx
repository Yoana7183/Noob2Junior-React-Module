import React from 'react';
import PropTypes from 'prop-types';

function Button({ title }) {
  return (
    <div>
      <button>{title}</button>
    </div>
  );
}
Button.propTypes = {
  title: PropTypes.string,
};
export default Button;
