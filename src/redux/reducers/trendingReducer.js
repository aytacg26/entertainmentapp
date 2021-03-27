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
  SET_MOVIE_TYPE,
  SET_BOTTOM,
  REMOVE_BOTTOM,
} from '../actions/types';

const initialState = {
  trendingMovies: null,
  page: 1,
  type: 'all',
  isBottom: false,
};

//setFetchedPages([...fetchedPages.filter((fp) => fp !== page), page]);

const trendingReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TRENDING:
      console.log('SET TRENDING PAGE : ', payload.page);
      return {
        ...state,
        page: payload.page,
        trendingMovies: state.trendingMovies
          ? [...state.trendingMovies, ...payload.data]
          : payload.data,
      };

    //Movie Type seçildiğinde, kaçıncı sayfada olduğuna bakıp filtreleme yapacak ve o sayfadan devam etmesi sağlanacak...
    case SET_MOVIE_TYPE:
      return {
        ...state,
        trendingMovies: [],
        page: 1,
        type: payload,
      };

    case SET_BOTTOM:
      return {
        ...state,
        isBottom: true,
      };

    case REMOVE_BOTTOM:
      return {
        ...state,
        isBottom: false,
      };

    default:
      return state;
  }
};

export default trendingReducer;
