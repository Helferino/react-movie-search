import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/movieActions';
import type { Action } from '../actions/movieActions';
import { list, detail } from '../api/movieApi';
import { Movie } from '../types/Movie';

export function* getList() {
  try {
    const { search, page } = yield select(state => state.movie)
    const movies: Movie[] = yield call(list, search, page);

    yield put(actions.listRequestSuccess(movies));
  } catch (error: any) {
    yield put(actions.listRequestFailure(error.message));
  }
}

export function* getDetail(action: Action) {
  try {
    const movie: Movie = yield call(detail, action.payload as string);

    yield put(actions.detailRequestSuccess(movie));
  } catch (error: any) {
    yield put(actions.detailRequestFailure(error.message));
  }
}

export function* watchMovies() {
  yield all([
    takeLatest([actions.types.LIST_REQUEST, actions.types.UPDATE_PAGINATION], getList),
    takeLatest(actions.types.DETAIL_REQUEST, getDetail)
  ])
}
