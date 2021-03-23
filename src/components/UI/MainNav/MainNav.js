import React, { useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useHistory } from 'react-router-dom';
import MovieIcon from '@material-ui/icons/Movie';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import TvIcon from '@material-ui/icons/Tv';
import './mainnav.css';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

const useStyles = makeStyles({
  root: {
    width: '100vw',
    background: '#2e3542',
    position: 'fixed',
    bottom: 0,
    zIndex: 100,
    boxShadow: '0 -1px 2px black',
    overflowX: 'auto',
  },
});

const MainNav = () => {
  const [isActive, setIsActive] = useState(false);
  const current = localStorage.getItem('current')
    ? parseInt(localStorage.getItem('current'))
    : 0;

  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState(current);
  const [label, setLabel] = useState('');

  const handleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const currentPage = localStorage.getItem('current');

    if (!currentPage) {
      setValue(0);
      console.log(currentPage);
    }

    if (history) {
      switch (parseInt(currentPage)) {
        case 0:
          history.push('/trending');
          setLabel('Trending');
          break;
        case 1:
          history.push('/movies');
          setLabel('Movies');
          break;
        case 2:
          history.push('/series');
          setLabel('Series');
          break;
        case 3:
          handleMenu();
          break;
        case 4:
          history.push('/');
          setLabel('Home');
          break;
        case 5:
          history.push('/search');
          setLabel('Search');
          break;
        default:
          history.push('/');
          break;
      }
    }

    //eslint-disable-next-line
  }, [value, history]);

  const handleIconClick = (val) => {
    localStorage.removeItem('current');
    localStorage.setItem('current', val);
    setValue(val);
  };

  return (
    <Fragment>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          if (newValue !== 3) {
            handleIconClick(newValue);
          } else {
            handleMenu();
          }
        }}
        showLabels={false}
        className={classes.root}
        component='section'
      >
        <BottomNavigationAction
          label='Trending'
          icon={<WhatshotIcon fontSize='small' />}
          style={{
            color:
              value === 0 ? 'rgb(253, 253, 61)' : 'rgba(255, 255, 255, 0.3)',
          }}
        />
        <BottomNavigationAction
          label='Movies'
          icon={<MovieIcon fontSize='small' />}
          style={{
            color:
              value === 1 ? 'rgb(253, 253, 61)' : 'rgba(255, 255, 255, 0.3)',
          }}
        />
        <BottomNavigationAction
          label='Series'
          icon={<TvIcon fontSize='small' />}
          style={{
            color:
              value === 2 ? 'rgb(253, 253, 61)' : 'rgba(255, 255, 255, 0.3)',
          }}
        />
        <BottomNavigationAction
          label='Menu'
          icon={<MenuRoundedIcon fontSize='small' />}
          style={{
            color:
              value === 3 ? 'rgb(253, 253, 61)' : 'rgba(255, 255, 255, 0.3)',
          }}
        />
      </BottomNavigation>
      <div className={isActive ? 'site-menu active' : 'site-menu'}>
        <div className='menu-heading'>{label}</div>
        <div className='icons-section'>
          <HomeRoundedIcon
            classes={{ root: 'site-menu-span' }}
            style={{ color: value === 4 ? 'yellow' : null }}
            onClick={() => handleIconClick(4)}
          />
          <WhatshotIcon
            classes={{ root: 'site-menu-span' }}
            style={{ color: value === 0 ? 'yellow' : null }}
            onClick={() => handleIconClick(0)}
          />
          <MovieIcon
            classes={{ root: 'site-menu-span' }}
            style={{ color: value === 1 ? 'yellow' : null }}
            onClick={() => handleIconClick(1)}
          />
          <TvIcon
            classes={{ root: 'site-menu-span' }}
            style={{ color: value === 2 ? 'yellow' : null }}
            onClick={() => handleIconClick(2)}
          />
          <YoutubeSearchedForIcon
            classes={{ root: 'site-menu-span' }}
            style={{ color: value === 5 ? 'yellow' : null }}
            onClick={() => handleIconClick(5)}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default MainNav;
