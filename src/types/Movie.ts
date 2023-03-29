export interface Movie {
  id: string;
  actors: string;
  awards: string;
  boxOffice: string;
  country: string;
  dvd: string;
  director: string;
  genre: string;
  language: string;
  metascore: string;
  plot: string;
  poster: string;
  production: string;
  rated: string;
  ratings: { source: string; value: string }[];
  released: string;
  title: string;
  type: string;
  website: string;
  writer: string;
  year: number;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
  detailUrl: string
}
