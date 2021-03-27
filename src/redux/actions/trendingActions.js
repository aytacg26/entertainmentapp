import axios from 'axios';
import { setLoading, removeLoading, setMessage } from './utilActions';

import {
  SET_TRENDING,
  SET_MOVIE_TYPE,
  SET_BOTTOM,
  REMOVE_BOTTOM,
} from './types';

export const fetchTrending = (page, type) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/${type}/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&total_pages`
      );

      if (data) {
        const newPage = page + 1;

        dispatch({
          type: SET_TRENDING,
          payload: { data: data.results, page: newPage },
        });
        dispatch(removeLoading());
      }
    } catch (error) {
      console.log(error.message);
      if (!window.navigator.onLine) {
        dispatch(
          setMessage(
            'Please check your internet connection',
            'error',
            'No internet connection'
          )
        );
      } else {
        dispatch(
          setMessage(
            'An unexpected server error occured, we are sorry...',
            'error',
            'Unexpected Server Error'
          )
        );
      }
    }
  };
};

export const handleScroll = (element) => (dispatch) => {
  const browserHeight = window.innerHeight;
  const scrollPosition = window.pageYOffset;
  const elementHeight = element.current.clientHeight;
  const elementIndent = element.current.offsetTop;
  const childHeight = element.current.firstElementChild?.clientHeight;

  if (
    browserHeight + scrollPosition + 2 * childHeight >=
    elementHeight + elementIndent
  ) {
    console.log('Dispatching Loading....');
    dispatch(setLoading());
    console.log('Dispatching SET BOTTOM...');
    dispatch({ type: SET_BOTTOM });
  }
};

export const removeBottom = () => ({
  type: REMOVE_BOTTOM,
});

export const setType = (type) => {
  return {
    type: SET_MOVIE_TYPE,
    payload: type,
  };
};
