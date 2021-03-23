import React, { useState, useEffect, useRef } from 'react';
import Card from '../../Card/Card';
import axios from 'axios';
import './trending.css';
import Loader from '../../UI/Loader/Loader';
import PageTitleContainer from '../../UI/PageTitleContainer/PageTitleContainer';
import MediaTypes from '../../UI/MediaTypes/MediaTypes';
import useScroll from '../../../customHooks/useScroll';

//Use Redux for Types, Pagination, Filtering (For filtering, instead of current page, we need to filter from 1000x20 trending media)
const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [fetchedPages, setFetchedPages] = useState([]);
  const [type, setType] = useState('all');
  const target = useRef();
  const [scrollData, screenHeight, pageScrollHeight] = useScroll(target);

  //It will be called every page change but page change will be done according to scroll and new data will be added to current data
  const fetchTrending = async () => {
    const { data } = await axios.get(`
      https://api.themoviedb.org/3/trending/${type}/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&total_pages`);

    setFetchedPages([...fetchedPages.filter((fp) => fp !== page), page]);

    if (trendingMovies) {
      setTrendingMovies([...trendingMovies, ...data.results]);
      setLoading(false);
    } else {
      setTrendingMovies(data.results);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!fetchedPages.includes(page)) {
      fetchTrending();
    }

    //eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    const pageNum = Math.ceil(
      (scrollData.y + (screenHeight - 300)) / pageScrollHeight
    );
    console.log(pageNum);
    if (
      !fetchedPages.includes(pageNum) &&
      trendingMovies &&
      pageNum > 0 &&
      pageNum <= 5
    ) {
      setPage(pageNum);
    }

    //eslint-disable-next-line
  }, [scrollData.y]);

  const handleType = (data) => {
    console.log(data);
    setType(data.type);
    setFetchedPages([1]);
    setPage(1);
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

export default Trending;
