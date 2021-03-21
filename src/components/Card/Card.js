import React from 'react';
import moment from 'moment';
import { getLanguage } from '../../utils/helper';
import { img_300, unavailable } from '../../config/config';
import { useHistory } from 'react-router-dom';
import './card.css';

const Card = ({ movie }) => {
  const image = movie.poster_path
    ? `${img_300}/${movie.poster_path}`
    : unavailable;

  const history = useHistory();

  const handleClick = () => {
    history.push(`/${movie.id}`);
  };

  console.log(movie.media_type);
  return (
    <div className='card-container' onClick={handleClick}>
      <div className='image-area'>
        <img
          src={image}
          title={movie.title || movie.name}
          alt={movie.title || movie.name}
        />
      </div>
      <div className='data-summary'>
        <div className='media-title'>{movie.title || movie.name}</div>
        <div className='movie-info'>
          <div className='title'>
            {movie.release_date ? 'Release Date' : 'Air Date'}
          </div>
          <div
            className='title-data'
            style={{
              color:
                moment().format() > moment(movie.release_date).format() ||
                moment().format() > moment(movie.first_air_date).format()
                  ? 'red'
                  : 'yellowgreen',
            }}
          >
            {movie.release_date
              ? moment(movie.release_date).format('DD MMM YYYY')
              : moment(movie.first_air_date).format('DD MMM YYYY')}
          </div>
        </div>
        <div className='movie-info'>
          <div className='title'>Language</div>
          <div className='title-data'>
            {getLanguage(movie.original_language)}
          </div>
        </div>
        <div className='movie-info'>
          <div className='title'>Point</div>
          <div
            className='title-data'
            style={{ color: movie.vote_average >= 5 ? 'yellowgreen' : 'red' }}
          >{`${movie.vote_average} / 10`}</div>
        </div>
      </div>
      <div className='movie_tv'>
        {movie.media_type === 'tv' ? 'TV Series' : 'Movie'}
      </div>
      {movie.adult ? (
        <div className='adult'>
          <span className='plus18'>18+</span>
        </div>
      ) : null}
    </div>
  );
};

export default Card;

/**
 * 
 *        <span>Language : {movie.original_language}</span>
          <span>Votes : {movie.vote_count}</span>
 *   if (movie.media_type === 'movie') {
    const {
      id,
      adult,
      backdrop_path,
      media_type,
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      video,
      vote_average,
      vote_count,
    } = movie;
  } else {
    const {
      id,
      backdrop_path,
      media_type,
      original_language,
      original_name,
      overview,
      popularity,
      poster_path,
      first_air_date,
      name,
      origin_country,
      video,
      vote_average,
      vote_count,
    } = movie;
  }
 */
