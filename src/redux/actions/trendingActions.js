import axios from 'axios';
import {
  SET_TRENDING,
  SET_PAGE_NUMBER,
  SET_MOVIE_TYPE,
  SET_LOADING,
  RESET_FETCHED_PAGES,
  FETCH_ERROR,
} from './types';

export const resetFetchedPages = () => ({
  type: RESET_FETCHED_PAGES,
});

export const setPageNumber = (page) => ({
  type: SET_PAGE_NUMBER,
  payload: page,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const fetchTrending = (page, type) => {
  //   addToFetchedPages();
  return async (dispatch) => {
    try {
      setLoading();

      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/${type}/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&total_pages`
      );

      dispatch({ type: SET_TRENDING, payload: { data: data.results, page } });
    } catch (error) {
      console.error(error);
      dispatch({ type: FETCH_ERROR, payload: error.response });
    }
  };
};
