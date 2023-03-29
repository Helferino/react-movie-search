import { useDispatch, useSelector } from 'react-redux';
import { updatePagination } from '../../../actions/movieActions';
import { RootState } from '../../../reducers';
import { MovieState } from '../../../reducers/movieReducer';
import Header from '../../layout/Header';
import MovieList from '../../MovieList';
import SearchInput from './SearchInput';
import Pagination from '../../Pagination';

const HomePage = () => {
  const dispatch = useDispatch();

  const { movies, loading, error, page, perPage } = useSelector((state: RootState) => state.movie) as MovieState;

  if (loading) {
    return <div className="plain">Loading...</div>
  }

  if (error) {
    return <div className="plain">Error: {error}</div>
  }

  const onPagination = (nextPage: number) => dispatch(updatePagination(nextPage))

  const getMovieList = () => {
    if (movies.total === 0) {
      return <div className="plain">No results</div>
    }

    return (
      <>
        <MovieList movies={movies.data} />
        <Pagination
          perPage={perPage}
          page={page}
          loading={loading}
          total={movies.total}
          onChange={onPagination}
        />
      </>
    )
  }

  return (
    <div className="home-page">
      <Header title="Find your movie" />

      <div className="search-wrapper">
        <SearchInput />
      </div>

      {getMovieList()}
    </div>
  );
};

export default HomePage;
