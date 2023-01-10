import { IMovie, IOneMovie } from "../../models/MovieModel";
import {
  ADD_TO_FAVORITES,
  SET_MOVIES,
  SET_ONE_MOVIE,
  SET_SEARCH_GENRE,
  SET_SEARCH_MOVIES,
  SET_SEARCH_VALUE,
  SET_SEARCH_YEAR,
} from "../actionTypes/moviesActionTypes";

export interface IMovieState {
  movies: IMovie[];
  favorites: IMovie[];
  trends: IMovie[];
  oneMovie: IOneMovie | null;
  searchResult: IMovie[];
  searchValue: string;
  searchGenre: string;
  searchYear: string;
  loading: false;
  error: string;
}

const initialState: IMovieState = {
  movies: [],
  favorites: [],
  trends: [],
  oneMovie: null,
  searchResult: [],
  searchValue: "",
  searchGenre: "",
  searchYear: "",
  loading: false,
  error: "",
};

export const moviesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_MOVIES: {
      const { movies } = action;
      return {
        ...state,
        movies,
        // movies: [...state.movies, ...movies],
      };
    }
    case SET_ONE_MOVIE: {
      const { movie } = action;
      return {
        ...state,
        oneMovie: movie,
      };
    }
    case SET_SEARCH_VALUE: {
      const { searchValue } = action;
      return {
        ...state,
        searchValue,
      };
    }
    case SET_SEARCH_MOVIES: {
      const { movies } = action;
      return {
        ...state,
        searchResult: movies,
      };
    }
    case SET_SEARCH_GENRE: {
      const { genre } = action;
      return {
        ...state,
        searchGenre: genre,
      };
    }
    case SET_SEARCH_YEAR: {
      const { year } = action;
      return {
        ...state,
        searchYear: year,
      };
    }
    case ADD_TO_FAVORITES: {
      const { movie } = action;
      return {
        ...state,
        favorites: [...state.favorites, movie],
      };
    }
    default:
      return state;
  }
};
