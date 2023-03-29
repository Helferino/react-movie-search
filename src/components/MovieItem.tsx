import { Link } from 'react-router-dom'
import { Movie } from '../types/Movie'

interface Props {
  movie: Movie;
}

const MovieItem = ({ movie }: Props) => {
  return (
    <Link to={movie.detailUrl} className="movie-item">
      <img src={movie.poster} alt={movie.title}/>

      <div className="body">
        <div className="title">{movie.title}</div>
        <div className="year">{movie.year}</div>
      </div>
    </Link>
  )
}

export default MovieItem
