import { combineReducers } from 'redux';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
  movie: movieReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
