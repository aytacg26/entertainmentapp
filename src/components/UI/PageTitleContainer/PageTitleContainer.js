import React from 'react';

const PageTitleContainer = ({ children, title, background }) => {
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

export default PageTitleContainer;
