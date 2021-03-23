import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../Card/Card';
import Genres from '../../Genres/Genres';
import PageTitleContainer from '../../UI/PageTitleContainer/PageTitleContainer';
import Pagination from '../../UI/Pagination/Pagination';
import Loader from '../../UI/Loader/Loader';
import Filters from '../../Filters/Filters';

import './movies.css';

const Movies = (props) => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [isMounted, setIsMounted] = useState(true);
  const [page, setPage] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);

  // const [search, setSearch] = useState('');

  // const [type, setType] = useState('all');

  /**
   * @TODO : Remove Pagination and change page number by scroll and add newly fetched movies to the existing ones
   * @TODO : Add filtering from Language, Movie Year, Sorting according to Average Point, currently movie year and language is static
   */
  const fetchMovies = async () => {
    const selectedGen = selectedGenres.map((selected) => selected.id).join(',');

    const { data } = await axios.get(`
    https://api.themoviedb.org/3/discover/movie?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=${page}&primary_release_year=2010&with_original_language=en&with_genres=${selectedGen}&vote_average.gte=${0}`);

    setMovies(data.results);
    setLoading(false);

    setTotalPages(data.total_pages);
  };

  useEffect(() => {
    if (isMounted) {
      console.log('is fetching');
      fetchMovies();
    }
    return () => {
      setIsMounted(false);
    };
    //eslint-disable-next-line
  }, [isMounted, page, selectedGenres]);

  const handlePage = (pageNum) => {
    setPage(parseInt(pageNum));
    setIsMounted(true);
    window.scroll(0, 0);
  };

  return (
    <PageTitleContainer title='Movies'>
      <div className='filter-container'>
        <div>
          <Genres
            type='movie'
            selectedGenres={selectedGenres}
            genres={genres}
            setSelected={setSelectedGenres}
            setGenres={setGenres}
            setPage={setPage}
            setIsMounted={setIsMounted}
          />
        </div>
        <div className='filters-area'>
          <Filters />
        </div>
      </div>
      <div className='page-cards-section'>
        {movies === null && loading ? (
          <Loader />
        ) : movies.length === 0 ? (
          <span>No Movie Found</span>
        ) : (
          movies.map((movie) => (
            <Card key={movie.id} movie={movie} showType={false} />
          ))
        )}
      </div>

      {totalPages > 1 ? (
        <Pagination onChange={handlePage} count={totalPages} page={page} />
      ) : null}
    </PageTitleContainer>
  );
};

export default Movies;
