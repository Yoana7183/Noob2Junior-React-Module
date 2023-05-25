import React from 'react';
import PropTypes from 'prop-types';
const TableInformation = (additionalUserInfo) => {
  const ProfileAdditionalInfo = additionalUserInfo.additionalUserInfo;
  return (
    <div>
      <div>{ProfileAdditionalInfo.repos}</div>
      <div>{ProfileAdditionalInfo.followers}</div>
      <div>{ProfileAdditionalInfo.following}</div>
    </div>
  );
};
TableInformation.propTypes = {
  additionalUserInfo: PropTypes.object.isRequired,
};
export default TableInformation;
