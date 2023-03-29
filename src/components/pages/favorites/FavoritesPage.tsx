import { Link } from 'react-router-dom';
import Header from '../../layout/Header';
import MovieList from '../../MovieList';

const FavoritesPage = () => {
  const favorites = localStorage.getItem('favorites') || '[]'
  const movies = JSON.parse(favorites)

  return (
    <div className="favorites-page">
      <Header title="Your favorite movies" />

      {movies.length
        ? <MovieList movies={movies} />
        : <div className="plain">No favorites movies yet. Go find some <Link to="/">here</Link></div>
      }
    </div>
  );
}

export default FavoritesPage;
