import React from 'react';
import './mediatype.css';
import PropTypes from 'prop-types';

const MediaType = ({ id, type, name, isActive, clicked }) => {
  const mediaTypeClass = isActive
    ? 'media-type-container selected'
    : 'media-type-container';

  const data = { id, type };

  return (
    <div className={mediaTypeClass} onClick={() => clicked(data)}>
      <span>{name}</span>
    </div>
  );
};

MediaType.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default MediaType;
