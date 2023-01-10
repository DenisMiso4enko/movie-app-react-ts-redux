export interface IMovie {
  imdbID: string;
  Title: string;
  Year: number;
  Poster: string;
  Type: string;
}

export interface IOneMovie {
  Actors?: string;
  Awards?: string;
  BoxOffice?: string;
  Country?: string;
  DVD?: string;
  Director?: string;
  Genre: string;
  Language?: string;
  Metascore?: string;
  Plot: string;
  Poster: string;
  Production?: string;
  Rated?: string;
  Ratings?: IRatings[];
  Released?: string;
  Response?: string;
  Runtime?: string;
  Title?: string;
  Type?: string;
  Year?: string;
  Website?: string;
  Writer?: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes?: string;
}

export interface IRatings {
  Source: string;
  Value: string;
}
