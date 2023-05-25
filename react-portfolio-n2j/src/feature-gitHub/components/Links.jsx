import React from 'react';
import PropTypes from 'prop-types';

const LinksAndLocation = (userLinks) => {
  const userLocation = userLinks.userLinks;
  return (
    <div>
      <div>{userLocation.location}</div>
    </div>
  );
};
LinksAndLocation.propTypes = {
  userLinks: PropTypes.object.isRequired,
};
export default LinksAndLocation;
