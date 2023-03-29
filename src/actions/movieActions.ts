import { Movie } from '../types/Movie';

export const types = {
  UPDATE_SEARCH: 'MOVIES_UPDATE_SEARCH',
  UPDATE_PAGINATION: 'MOVIES_UPDATE_PAGINATION',

  LIST_REQUEST: 'MOVIES_LIST_REQUEST',
  LIST_REQUEST_SUCCESS: 'MOVIES_LIST_SUCCESS',
  LIST_REQUEST_FAILURE: 'MOVIES_LISTFAILURE',

  DETAIL_REQUEST: 'MOVIES_DETAIL_REQUEST',
  DETAIL_REQUEST_SUCCESS: 'MOVIES_DETAIL_SUCCESS',
  DETAIL_REQUEST_FAILURE: 'MOVIES_DETAILFAILURE',
} as const

export interface Action {
  type: string;
  payload?: any;
}

export const updateSearch = (value: string) => {
  return {
    type: types.UPDATE_SEARCH,
    payload: value
  };
}

export const updatePagination = (nextPage: number) => {
  return {
    type: types.UPDATE_PAGINATION,
    payload: nextPage
  };
}

export const listMovies = () => {
  // Note: List arguments (search, page) are in redux store
  return {
    type: types.LIST_REQUEST
  };
};

export const movieDetail = (id?: string) => {
  return {
    type: types.DETAIL_REQUEST,
    payload: id
  };
};

export const listRequestSuccess = (movies: Movie[]) => {
  return {
    type: types.LIST_REQUEST_SUCCESS,
    payload: movies
  };
};

export const listRequestFailure = (error: Error) => {
  return {
    type: types.LIST_REQUEST_FAILURE,
    payload: error
  };
};

export const detailRequestSuccess = (movie: Movie) => {
  return {
    type: types.DETAIL_REQUEST_SUCCESS,
    payload: movie
  };
};

export const detailRequestFailure = (error: Error) => {
  return {
    type: types.DETAIL_REQUEST_FAILURE,
    payload: error
  };
};

