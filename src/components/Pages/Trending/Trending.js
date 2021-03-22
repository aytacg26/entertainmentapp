import React, { useState, useEffect } from 'react';
import Card from '../../Card/Card';
import axios from 'axios';
import './trending.css';
import Loader from '../../UI/Loader/Loader';
import PageTitleContainer from '../../UI/PageTitleContainer/PageTitleContainer';
import Pagination from '../../UI/Pagination/Pagination';
import MediaTypes from '../../UI/MediaTypes/MediaTypes';

//Use Redux for Types, Pagination, Filtering (For filtering, instead of current page, we need to filter from 1000x20 trending media)
const Trending = (props) => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [isMounted, setIsMounted] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [type, setType] = useState('all');

  const fetchTrending = async () => {
    let numToUse = 100;
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/trending/${type}/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&total_pages`);

    setTrendingMovies(data.results);
    setLoading(false);

    if (data.total_pages < 100) {
      numToUse = data.total_pages;
    }

    setTotalPages(numToUse);
  };

  useEffect(() => {
    if (isMounted) {
      fetchTrending();
    }
    return () => {
      setIsMounted(false);
    };
    //eslint-disable-next-line
  }, [isMounted, page]);

  const movies =
    trendingMovies !== null
      ? trendingMovies.filter((movie) => {
          const movieName = movie.title || movie.name;
          const movieType = movie.media_type === 'tv' ? 'tv series' : 'movie';

          return (
            movieName.toLowerCase().includes(search.toLowerCase()) ||
            movieType.toLowerCase().includes(search.toLowerCase())
          );
        })
      : trendingMovies;

  //   return (
  //     <div className='page-container'>
  //       <div className='page-title-area'>
  //         <span className='page-title'>Trending</span>
  //         <div className='filter-area'>
  //           <input
  //             type='search'
  //             name='search'
  //             className='page-search-box'
  //             placeholder='Filter Movies...'
  //             autocomplete='off'
  //             onChange={(e) => setSearch(e.target.value)}
  //             value={search}
  //           />
  //         </div>
  //       </div>
  //       <div className='trending'>
  //         {trendingMovies === null && loading ? (
  //           <Loader />
  //         ) : trendingMovies.length === 0 ? (
  //           <span>No Tranding Movie</span>
  //         ) : (
  //           movies.map((movie) => <Card key={movie.id} movie={movie} />)
  //         )}
  //       </div>
  //     </div>
  //   );
  const handlePage = (pageNum) => {
    setPage(parseInt(pageNum));
    setIsMounted(true);
    window.scroll(0, 0);
  };

  const handleType = (data) => {
    setType(data.type);
    setPage(1);
    setIsMounted(true);
    window.scroll(0, 0);
  };

  return (
    <PageTitleContainer title='Tranding'>
      <MediaTypes getType={handleType} />
      <div className='trending'>
        {trendingMovies === null && loading ? (
          <Loader />
        ) : trendingMovies.length === 0 ? (
          <span>No Tranding Movie</span>
        ) : (
          movies.map((movie) => <Card key={movie.id} movie={movie} />)
        )}
      </div>
      <Pagination onChange={handlePage} count={totalPages} page={page} />
    </PageTitleContainer>
  );
};

export default Trending;

/**
 *
 */
