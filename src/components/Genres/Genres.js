import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Chip } from '@material-ui/core';
import './genres.css';

const Genres = ({
  type,
  selectedGenres,
  genres,
  setSelected,
  setGenres,
  setPage,
  setIsMounted,
}) => {
  const [isMount, setIsMount] = useState(true);
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setGenres(data.genres);
  };

  const handleAdd = (genre) => {
    setSelected([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
    setIsMounted(true);
  };

  const handleDelete = (genre) => {
    setSelected(selectedGenres.filter((sG) => sG.id !== genre.id));
    setGenres([...genres, genre]);
    setPage(1);
    setIsMounted(true);
  };

  useEffect(() => {
    if (isMount) {
      fetchGenres();
    }
    return () => {
      setIsMount(false);
      //   setGenres([]);
    };
    //eslint-disable-next-line
  }, [isMount]);

  return (
    <div className='genres-container'>
      {selectedGenres.length > 0
        ? selectedGenres.map((genre) => (
            <Chip
              label={genre.name}
              key={genre.id}
              id={genre.id}
              style={{ margin: 3 }}
              clickable
              size='small'
              color='secondary'
              avatar={<Avatar>{genre.name.slice(0, 1)}</Avatar>}
              onDelete={() => handleDelete(genre)}
            />
          ))
        : null}
      {genres.length > 0
        ? genres.map((genre) => (
            <Chip
              label={genre.name}
              key={genre.id}
              id={genre.id}
              style={{ margin: 3 }}
              clickable
              size='small'
              color='primary'
              onClick={() => handleAdd(genre)}
              avatar={<Avatar>{genre.name.slice(0, 1)}</Avatar>}
            />
          ))
        : null}
    </div>
  );
};

export default Genres;
