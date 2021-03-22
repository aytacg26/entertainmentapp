import React, { useRef } from 'react';
import './Header.css';
import logo from '../../../images/EHSH.png';
import useScroll from '../../../customHooks/useScroll';
import EjectIcon from '@material-ui/icons/Eject';

const Header = () => {
  const hd = useRef(null);
  const [scrollData, screenHeight, pageScrollHeight] = useScroll(hd);

  //UseEffect içerisinde hesaplansın
  //pageScrollHeight - (screenHeight + 400)

  return (
    <div className='header' ref={hd}>
      <div className='logo'>
        <img src={logo} title='Entertainment Hub' alt='Entertainment Hub' />
      </div>
      <h1>
        <span>E</span>ntertainment <span>H</span>
        <span style={{ color: 'red', fontSize: '1.3rem' }}>ub</span>
      </h1>

      {scrollData.y >= pageScrollHeight - (screenHeight + 400) &&
      pageScrollHeight - (screenHeight + 400) > 0 ? (
        <div className='header-buttons'>
          <span
            onClick={() => window.scroll({ top: 0 })}
            className='scroll-up'
            title='Scroll Up'
          >
            <EjectIcon style={{ color: 'red', fontSize: '30px' }} />
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
