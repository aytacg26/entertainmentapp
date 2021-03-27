import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setType } from '../../../redux/actions/trendingActions';
import { setLoading } from '../../../redux/actions/utilActions';
import MediaType from './MediaType/MediaType';
import './mediatypes.css';

const MediaTypes = () => {
  const [mediaTypes, setMediaTypes] = useState([]);

  const dispatch = useDispatch();
  const currentState = useSelector((state) => ({
    movies: state.trending.trendingMovies,
    page: state.trending.page,
  }));

  const { movies, page } = currentState;

  useEffect(() => {
    //I assume that it comes from database
    const types = [
      { id: 'type-all-001', type: 'all', name: 'All', isSelected: true },
      {
        id: 'type-movie-002',
        type: 'movie',
        name: 'Movies',
        isSelected: false,
      },
      { id: 'type-tv-003', type: 'tv', name: 'TV Series', isSelected: false },
    ];

    setMediaTypes(types);
  }, []);

  const handleClick = (data) => {
    const newMediaTypes = mediaTypes.map((type) =>
      type.id === data.id
        ? { ...type, isSelected: true }
        : { ...type, isSelected: false }
    );

    dispatch(setType(data.type, movies, page));
    dispatch(setLoading());
    setMediaTypes(newMediaTypes);
  };

  return (
    <div className='media-types'>
      {mediaTypes.length > 0
        ? mediaTypes.map((mediaType) => (
            <MediaType
              key={mediaType.id}
              id={mediaType.id}
              type={mediaType.type}
              name={mediaType.name}
              isActive={mediaType.isSelected}
              clicked={(data) => {
                handleClick(data);
              }}
            />
          ))
        : null}
    </div>
  );
};

export default MediaTypes;
