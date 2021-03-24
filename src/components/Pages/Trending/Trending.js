import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import Card from '../../Card/Card';
import './trending.css';
import Loader from '../../UI/Loader/Loader';
import PageTitleContainer from '../../UI/PageTitleContainer/PageTitleContainer';
import MediaTypes from '../../UI/MediaTypes/MediaTypes';
import useScroll from '../../../customHooks/useScroll';
import {
  resetFetchedPages,
  setPageNumber,
  fetchTrending,
} from '../../../redux/actions/trendingActions';

//Use Redux for Types, Pagination, Filtering (For filtering, instead of current page, we need to filter from 1000x20 trending media)
const Trending = ({
  page,
  fetchedPages,
  trendingMovies,
  resetFetchedPages,
  setPageNumber,
  fetchTrending,
  loading,
}) => {
  const [type, setType] = useState('all');
  const target = useRef();
  const [scrollData, screenHeight, pageScrollHeight] = useScroll(target);

  useEffect(() => {
    if (!fetchedPages.includes(page)) {
      fetchTrending(page, type);
    }

    //eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    const pageNum = Math.ceil(
      (scrollData.y + (screenHeight - 300)) / pageScrollHeight
    );

    if (
      !fetchedPages.includes(pageNum) &&
      trendingMovies &&
      pageNum > 0 &&
      pageNum <= 5
    ) {
      setPageNumber(pageNum);
    }

    //eslint-disable-next-line
  }, [scrollData.y]);

  const handleType = (data) => {
    setType(data.type);
    resetFetchedPages();
    setPageNumber(1);
    window.scroll(0, 0);
  };

  //Some of the move comes 2 times from server because they are trending in different weeks or there is something wrong in API
  //we need to get distict data from all and present them (when we are updating the state, we have to compare previous data with new data and create a distict movies data)
  const movies =
    type === 'all'
      ? trendingMovies
      : trendingMovies.filter((movie) => movie.media_type === type);

  return (
    <PageTitleContainer title='Tranding'>
      <MediaTypes getType={handleType} />
      <div className='page-cards-section' ref={target}>
        {trendingMovies === null && loading ? (
          <Loader />
        ) : trendingMovies.length === 0 ? (
          <span>No Tranding Movie</span>
        ) : (
          movies.map((movie, index) => (
            <Card
              key={`${movie.id}-${movie.media_type}-${index}`}
              movie={movie}
              showType={true}
            />
          ))
        )}
      </div>
    </PageTitleContainer>
  );
};

const mapStateToProps = (state) => ({
  page: state.trending.page,
  fetchedPages: state.trending.fetchedPages,
  trendingMovies: state.trending.trendingMovies,
  loading: state.trending.loading,
});

const mapDispatchToProps = {
  resetFetchedPages,
  setPageNumber,
  fetchTrending,
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
