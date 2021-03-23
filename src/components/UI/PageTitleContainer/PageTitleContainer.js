import React from 'react';
import PropTypes from 'prop-types';

const PageTitleContainer = ({ children, title }) => {
  return (
    <div className='page-container'>
      <div className='page-title-area'>
        <span className='page-title'>{title}</span>
        <div className='filter-area'>
          <input
            type='search'
            name='search'
            className='page-search-box'
            placeholder='Filter Movies...'
            autoComplete='off'
          />
        </div>
      </div>
      {children}
    </div>
  );
};

PageTitleContainer.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
};

export default PageTitleContainer;
