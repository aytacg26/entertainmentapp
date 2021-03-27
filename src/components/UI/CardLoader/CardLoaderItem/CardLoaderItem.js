import React from 'react';
import './cardloaderitem.css';

const CardLoaderItem = () => {
  return (
    <div className='load-card-container'>
      <div className='image-area-loader'>
        <div className='image-loading'></div>
      </div>

      <div className='data-summary-loader'>
        <div className='media-title-loader'>
          <div className='image-loading'></div>
        </div>
        <div className='movie-info-loader'>
          <div className='title-loader'>
            <div className='image-loading'></div>
          </div>
          <div className='title-loader'>
            <div className='image-loading'></div>
          </div>
        </div>
        <div className='movie-info-loader'>
          <div className='title-loader'>
            <div className='image-loading'></div>
          </div>
          <div className='title-loader'>
            <div className='image-loading'></div>
          </div>
        </div>
      </div>
      <div className='movie_tv-loader'>Loading...</div>
    </div>
  );
};

export default CardLoaderItem;
