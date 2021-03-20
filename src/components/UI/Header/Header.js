import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <span class='logo-line'></span>
        <span class='logo-line'></span>
      </div>
      <h1>
        <span>E</span>ntertainment <span>H</span>
        <span style={{ color: 'red', fontSize: '1.3rem' }}>ub</span>
      </h1>
    </div>
  );
};

export default Header;
