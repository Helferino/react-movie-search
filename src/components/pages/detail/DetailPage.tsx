import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieDetail } from '../../../actions/movieActions';
import { RootState } from '../../../reducers';
import { useParams } from 'react-router-dom';
import { MovieState } from '../../../reducers/movieReducer'
import { Movie } from '../../../types/Movie';
import { AiOutlineHeart, AiFillHeart } from  'react-icons/ai'

const keys = [
  { name: 'Actors', value: 'actors' },
  { name: 'Awards', value: 'awards' },
  { name: 'BoxOffice', value: 'boxOffice' },
  { name: 'Country', value: 'country' },
  { name: 'DVD', value: 'dvd' },
  { name: 'Director', value: 'director' },
  { name: 'Genre', value: 'genre' },
  { name: 'Language', value: 'language' },
  { name: 'Metascore', value: 'metascore' },
  { name: 'Plot', value: 'plot' },
  { name: 'Production', value: 'production' },
  { name: 'Rated', value: 'rated' },
  { name: 'Released', value: 'released' },
  { name: 'Type', value: 'type' },
  { name: 'Website', value: 'website' },
  { name: 'Year', value: 'year' },
  { name: 'IMDB ID', value: 'imdbID' },
  { name: 'IMDB Rating', value: 'imdbRating' },
  { name: 'IMDB Votes', value: 'imdbVotes' },
]

const DetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch()

  // Favorite movies
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>(
    JSON.parse(localStorage.getItem('favorites') ||'[]') || []
  )

  // Fetch movie detail
  useEffect(() => {
    dispatch(movieDetail(params.id));
  }, [dispatch, params.id]);

  // Access fetched data from store (Assigment request)
  const { loading, movie, error } = useSelector(
    (state: RootState) => state.movie
  ) as MovieState;

  // Sync local storage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoriteMovies))
  }, [favoriteMovies])

  if (loading) {
    return <div className="plain">Loading...</div>;
  }

  if (error) {
    return <div className="plain">Error: {error}</div>;
  }

  if (!movie) {
    return <div className="plain">Movie not found</div>;
  }

  const isFavorited = () => {
    return favoriteMovies.some(item => item.id === movie.id)
  }

  const addToFavorite = () => {
    if (isFavorited()) {
      return
    }

    setFavoriteMovies([...favoriteMovies, movie])
  }

  const removeFromFavorite = () => {
    if (!isFavorited()) {
      return
    }

    setFavoriteMovies(favoriteMovies.filter(f => f.id !== movie.id))
  }

  const toggleFavorite = () => {
    isFavorited() ? removeFromFavorite() : addToFavorite()
  }

  return (
    <div className="detail-page">
      <div className="header">
        <h1 className="title">{movie.title}</h1>
        <button className="favorite-button" onClick={toggleFavorite}>{ isFavorited() ? <AiFillHeart /> : <AiOutlineHeart />}</button>
      </div>

      <div className="divider"></div>

      <div className="body">
        <img src={movie.poster} alt={movie.title} />

        <div className="info">
          {keys.map(key => {
            return (
              <div className="pair" key={key.value}>
                <div className="name">{ key.name }:</div>
                <div className="value">{ movie[key.value as keyof Movie] as string }</div>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  );
}

export default DetailPage;
