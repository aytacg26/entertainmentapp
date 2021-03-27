import React, { Fragment, lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/UI/Header/Header';
import MainNav from './components/UI/MainNav/MainNav';
import { Container } from '@material-ui/core';
import Home from './components/Pages/Home/Home';
import Trending from './components/Pages/Trending/Trending';
// import Movies from './components/Pages/Movies/Movies';
import Series from './components/Pages/Series/Series';
import Search from './components/Pages/Search/Search';
import Loader from './components/UI/Loader/Loader';
import MessageModal from './components/UI/MessageModal/MessageModal';

const Movies = lazy(() => import('./components/Pages/Movies/Movies'));

const App = () => {
  const state = useSelector((state) => ({
    message: state.message.message,
    modalType: state.message.modalType,
    header: state.message.header,
  }));

  const { message, modalType, header } = state;

  return (
    <Router>
      <Fragment>
        <MessageModal
          message={message}
          messageHeader={header}
          type={modalType}
        />
        <Header />
        <div className='App'>
          <Container>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/trending' component={Trending} />
              <Route
                path='/movies'
                render={() => (
                  <Suspense fallback={<Loader />}>
                    <Movies />
                  </Suspense>
                )}
              />
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
