import React from 'react';
import './mediatype.css';

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

export default MediaType;
