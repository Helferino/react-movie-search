import { all, AllEffect } from 'redux-saga/effects';
import { watchMovies } from './movieSaga';

export default function* rootSaga(): Generator<AllEffect<Generator>> {
  yield all([
    watchMovies(),
  ]);
}
