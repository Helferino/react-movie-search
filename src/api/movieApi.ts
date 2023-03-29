import { Movie } from '../types/Movie';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

interface SearchResponse {
  Search: { Title: string, Poster: string, Type: string, Year: string, imdbID: string }[];
  totalResults: string;
  Response: 'True' | 'False';
}

interface DetailResponse {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: { Source: string; Value: string }[];
  Released: string;
  Response: 'True' | 'False';
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}

export const list = async (search: string, page = 1) => {
  const response = await fetch(`${API_URL}/?apikey=${API_KEY}&s=${search}&page=${page}`);
  const data = await response.json() as SearchResponse;
  const failed = data.Response === 'False'

  return {
    total: failed ? 0 : parseInt(data.totalResults),
    data: failed ? [] : data.Search.map(movie => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        poster: movie.Poster,
        type: movie.Type,
        year: parseInt(movie.Year),
        imdbID: movie.imdbID,
        detailUrl: `/movie/${movie.imdbID}`
      }
    }) as Movie[]
  };
};

export const detail = async (id: string) => {
  const response = await fetch(`${API_URL}/?apikey=${API_KEY}&i=${id}`);
  const data = await response.json() as DetailResponse;
  const failed = data.Response === 'False'

  if (failed) {
    return null
  }

  return {
    id: data.imdbID,
    actors: data.Actors,
    awards: data.Awards,
    boxOffice: data.BoxOffice,
    country: data.Country,
    dvd: data.DVD,
    director: data.Director,
    genre: data.Genre,
    language: data.Language,
    metascore: data.Metascore,
    plot: data.Plot,
    poster: data.Poster,
    production: data.Production,
    rated: data.Rated,
    ratings: data.Ratings.map(rating => ({ source: rating.Source, value: rating.Value })),
    released: data.Released,
    title: data.Title,
    type: data.Type,
    website: data.Website,
    writer: data.Writer,
    year: data.Year,
    imdbID: data.imdbID,
    imdbRating: data.imdbRating,
    imdbVotes: data.imdbVotes,
    detailUrl: `/movie/${data.imdbID}`
  }
}