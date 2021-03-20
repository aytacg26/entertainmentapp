import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import MovieIcon from '@material-ui/icons/Movie';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import TvIcon from '@material-ui/icons/Tv';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';

const useStyles = makeStyles({
  root: {
    width: '100%',
    background: '#2e3542',
    position: 'fixed',
    bottom: 0,
    zIndex: 100,
    boxShadow: '0 -1px 2px black',
  },
});

const MainNav = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label='Trending' icon={<WhatshotIcon />} />
      <BottomNavigationAction label='Movies' icon={<MovieIcon />} />
      <BottomNavigationAction label='TV Series' icon={<TvIcon />} />
      <BottomNavigationAction
        label='Search'
        icon={<YoutubeSearchedForIcon />}
      />
    </BottomNavigation>
  );
};

export default MainNav;
