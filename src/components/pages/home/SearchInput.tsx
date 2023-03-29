import { useDispatch, useSelector } from 'react-redux';
import { listMovies, updateSearch } from '../../../actions/movieActions';
import { RootState } from '../../../reducers';
import { MovieState } from '../../../reducers/movieReducer';
import { FiSearch } from 'react-icons/fi'

const SearchInput = () => {
  const dispatch = useDispatch()

  const { search, loading } = useSelector((state: RootState) => state.movie) as MovieState;

  const handleChange = (event: any) => {
    dispatch(updateSearch(event.target.value || ''))
  }

  const handleSubmit = () => {
    if (!search.length || loading) {
      return
    }

    dispatch(listMovies())
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input value={search} placeholder="Movie name" onChange={handleChange} />

      <button disabled={loading} type="submit">
        <FiSearch />
      </button>
    </form>
  )
}

export default SearchInput;
