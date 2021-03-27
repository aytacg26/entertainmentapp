import React, { useEffect, useRef, Fragment } from 'react';
import { connect } from 'react-redux';
import Card from '../../Card/Card';
import './trending.css';
import PageTitleContainer from '../../UI/PageTitleContainer/PageTitleContainer';
import MediaTypes from '../../UI/MediaTypes/MediaTypes';
import useScrollListener from '../../../customHooks/useScrollListener';
import {
  fetchTrending,
  handleScroll,
  removeBottom,
} from '../../../redux/actions/trendingActions';
import { setLoading, removeLoading } from '../../../redux/actions/utilActions';
import CardLoader from '../../UI/CardLoader/CardLoader';
import OnPageMessage from '../../UI/OnPageMessage/OnPageMessage';

//Use Redux for Types, Pagination, Filtering (For filtering, instead of current page, we need to filter from 1000x20 trending media)
const Trending = ({
  page,
  type,
  trendingMovies,
  fetchTrending,
  loading,
  handleScroll,
  removeBottom,
  isBottom,
  error,
  removeLoading,
}) => {
  const target = useRef();
  useScrollListener(target, handleScroll);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (page === 1) {
      fetchTrending(page, type);
    }

    if (page > 1 && page <= 6 && isBottom) {
      fetchTrending(page, type);
    }

    if (page > 6) {
      removeLoading();
    }

    return () => {
      removeBottom();
    };

    //eslint-disable-next-line
  }, [isBottom, type, page]);

  let movies = error ? null : <CardLoader />;
  const pageMessage = !window.navigator.onLine
    ? 'No Internet Connection...'
    : 'No Trending Movie Found';

  if (trendingMovies && !error) {
    movies =
      trendingMovies.length === 0 && !loading ? (
        <OnPageMessage message={pageMessage} />
      ) : (
        trendingMovies.map((movie, index) => (
          <Card
            key={`${movie.id}-${movie.media_type}-${index}`}
            movie={movie}
            showType={true}
          />
        ))
      );
  }

  return (
    <Fragment>
      <PageTitleContainer title='Tranding'>
        <MediaTypes />

        <div className='page-cards-section' ref={target}>
          {movies}
          {loading ? <CardLoader /> : null}
        </div>
      </PageTitleContainer>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  page: state.trending.page,
  trendingMovies: state.trending.trendingMovies,
  loading: state.message.loading,
  isBottom: state.trending.isBottom,
  error: state.message.message,
  type: state.trending.type,
});

const mapDispatchToProps = {
  fetchTrending,
  handleScroll,
  removeBottom,
  removeLoading,
  setLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
