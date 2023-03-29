import { Movie } from '../types/Movie';
import MovieItem from './MovieItem';

interface Props {
  movies: Movie[]
}

const MovieList = ({ movies }: Props) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList;
