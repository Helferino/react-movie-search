import { Movie } from '../types/Movie';
import { Action, types } from '../actions/movieActions';

export interface MovieState {
  loading: boolean;
  search: string;
  page: number;
  perPage: number;
  movie: Movie | null;
  movies: { data: Movie[], total: number };
  error: string | null;
}

const initialState: MovieState = {
  loading: false,
  search: '',
  page: 1,
  perPage: 10,
  movie: null,
  movies: { data: [], total: 0 },
  error: null
};

const movieReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case types.UPDATE_SEARCH:
      return {
        ...state,
        search: action.payload
      };

    case types.UPDATE_PAGINATION:
        return {
          ...state,
          page: action.payload
        };

    case types.DETAIL_REQUEST:
    case types.LIST_REQUEST:
      return {
        ...state,
        loading: true
      };

    case types.LIST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
        error: null
      };

    case types.LIST_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        movies: [],
        error: action.payload
      };

    case types.DETAIL_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: action.payload,
        error: null
      };

    case types.DETAIL_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        movie: null,
        error: action.payload
      };

    default:
      return state;
  }
};

export default movieReducer;
