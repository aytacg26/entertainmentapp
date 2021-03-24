/**
 *   const [trendingMovies, setTrendingMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [fetchedPages, setFetchedPages] = useState([]);
  const [type, setType] = useState('all');
 export const SET_TRENDING = 'SET_TRENDING';
export const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER';
export const ADD_TO_FETCHED_PAGES = 'ADD_TO_FETCHED_PAGES';
export const REMOVE_FROM_FETCHED_PAGES = 'REMOVE_FROM_FETCHED_PAGES';
export const SET_MOVIE_TYPE = 'SET_MOVIE_TYPE';
 
  */
import {
  SET_TRENDING,
  SET_PAGE_NUMBER,
  SET_MOVIE_TYPE,
  SET_LOADING,
  RESET_FETCHED_PAGES,
  FETCH_ERROR,
} from '../actions/types';

const initialState = {
  trendingMovies: null,
  loading: true,
  page: 1,
  fetchedPages: [],
  type: 'all',
  error: null,
};

//setFetchedPages([...fetchedPages.filter((fp) => fp !== page), page]);

const trendingReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TRENDING:
      return {
        ...state,
        loading: false,
        fetchedPages: [...state.fetchedPages, state.page],
        trendingMovies: state.trendingMovies
          ? [...state.trendingMovies, ...payload]
          : payload,
      };

    case RESET_FETCHED_PAGES:
      return {
        ...state,
        fetchedPages: [1],
      };

    case SET_PAGE_NUMBER:
      return {
        ...state,
        page: payload,
      };

    case SET_MOVIE_TYPE:
      return {
        ...state,
        type: payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default trendingReducer;
