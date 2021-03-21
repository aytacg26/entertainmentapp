import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useHistory } from 'react-router-dom';
import MovieIcon from '@material-ui/icons/Movie';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import TvIcon from '@material-ui/icons/Tv';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';

const useStyles = makeStyles({
  root: {
    width: '100vw',
    background: '#2e3542',
    position: 'fixed',
    bottom: 0,
    zIndex: 100,
    boxShadow: '0 -1px 2px black',
  },
});

const MainNav = () => {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState();

  useEffect(() => {
    if (history) {
      switch (value) {
        case 0:
          history.push('/trending');
          break;
        case 1:
          history.push('/movies');
          break;
        case 2:
          history.push('/series');
          break;
        case 3:
          history.push('/search');
          break;
        default:
          history.push('/');
          break;
      }
    }
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label='Trending'
        icon={<WhatshotIcon />}
        style={{
          color: value === 0 ? 'rgb(253, 253, 61)' : 'rgba(255, 255, 255, 0.3)',
        }}
      />
      <BottomNavigationAction
        label='Movies'
        icon={<MovieIcon />}
        style={{
          color: value === 1 ? 'rgb(253, 253, 61)' : 'rgba(255, 255, 255, 0.3)',
        }}
      />
      <BottomNavigationAction
        label='Series'
        icon={<TvIcon />}
        style={{
          color: value === 2 ? 'rgb(253, 253, 61)' : 'rgba(255, 255, 255, 0.3)',
        }}
      />
      <BottomNavigationAction
        label='Search'
        icon={<YoutubeSearchedForIcon />}
        style={{
          color: value === 3 ? 'rgb(253, 253, 61)' : 'rgba(255, 255, 255, 0.3)',
        }}
      />
    </BottomNavigation>
  );
};

export default MainNav;
