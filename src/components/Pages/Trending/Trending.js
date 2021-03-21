import React, { useState, useEffect } from 'react';
import Card from '../../Card/Card';
import axios from 'axios';
import './trending.css';
import Loader from '../../UI/Loader/Loader';
import PageTitleContainer from '../../UI/PageTitleContainer/PageTitleContainer';

const Trending = (props) => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const fetchTrending = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`);

    setTrendingMovies(data.results);
    setLoading(false);
    console.log(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

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

  return (
    <PageTitleContainer title='Tranding'>
      <div className='trending'>
        {trendingMovies === null && loading ? (
          <Loader />
        ) : trendingMovies.length === 0 ? (
          <span>No Tranding Movie</span>
        ) : (
          movies.map((movie) => <Card key={movie.id} movie={movie} />)
        )}
      </div>
    </PageTitleContainer>
  );
};

export default Trending;

/**
 *
 */
