import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/UI/Header/Header';
import MainNav from './components/UI/MainNav/MainNav';
import { Container } from '@material-ui/core';
import Home from './components/Pages/Home/Home';
import Trending from './components/Pages/Trending/Trending';
import Movies from './components/Pages/Movies/Movies';
import Series from './components/Pages/Series/Series';
import Search from './components/Pages/Search/Search';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <div className='App'>
          <Container>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/trending' component={Trending} />
              <Route path='/movies' component={Movies} />
              <Route path='/series' component={Series} />
              <Route path='/search' component={Search} />
            </Switch>
          </Container>
        </div>
        <MainNav />
      </Fragment>
    </Router>
  );
};

export default App;
