import { takeEvery, put } from "redux-saga/effects";
import { API_KEY, BASE_URL } from "../../constance";
import { IMovie, IOneMovie } from "../../models/MovieModel";
import {
  ADD_TO_FAVORITES,
  LOAD_MOVIES,
  LOAD_ONE_MOVIE,
  SEARCH_MOVIE,
  SET_MOVIES,
  SET_ONE_MOVIE,
  SET_SEARCH_GENRE,
  SET_SEARCH_MOVIES,
  SET_SEARCH_VALUE,
  SET_SEARCH_YEAR,
} from "../actionTypes/moviesActionTypes";

export function* watcherMovies() {
  yield takeEvery(LOAD_MOVIES, fetchLoadMovies);
  yield takeEvery(SEARCH_MOVIE, fetchSearchMovies);
  yield takeEvery(LOAD_ONE_MOVIE, fetchOneMovie);
}
export const loadMovies = (payload: { currentPage: number; type: string }) => ({
  type: LOAD_MOVIES,
  payload,
});

export const setMovies = (movies: IMovie[]) => ({
  type: SET_MOVIES,
  movies,
});

export const setSearchMovies = (movies: IMovie[]) => ({
  type: SET_SEARCH_MOVIES,
  movies,
});

export const setOneMovie = (movie: IOneMovie) => ({
  type: SET_ONE_MOVIE,
  movie,
});

export const searchMovies = (payload: {
  searchValue: string;
  currentPage: number;
  genre: string;
  year: string;
}) => ({
  type: SEARCH_MOVIE,
  payload,
});

export const loadOneMovie = (id: string) => ({
  type: LOAD_ONE_MOVIE,
  id,
});

export const setSearchValue = (searchValue: string) => ({
  type: SET_SEARCH_VALUE,
  searchValue,
});

export const addToFavorite = (movie: IMovie) => ({
  type: ADD_TO_FAVORITES,
  movie,
});

export const setSearchGenre = (genre: string) => ({
  type: SET_SEARCH_GENRE,
  genre,
});

export const setSearchYear = (year: string) => ({
  type: SET_SEARCH_YEAR,
  year,
});

function* fetchLoadMovies(action: any) {
  const { payload } = action;
  const { currentPage, type } = payload;
  try {
    const response: Response = yield fetch(
      `${BASE_URL}?s=dream&page=${currentPage}&apikey=${API_KEY}&type=${type}&plot=full`
    );
    const data: { Search: IMovie[] } = yield response.json();
    const { Search } = data;

    yield put(setMovies(Search));
  } catch (error: any) {
    console.error(error.message);
  }
}

export function* fetchSearchMovies(action: any) {
  const { payload } = action;
  const { currentPage, searchValue, genre, year } = payload;
  try {
    const response: Response = yield fetch(
      `${BASE_URL}?s=${searchValue}&page=${currentPage}&apikey=${API_KEY}&y=${year}&type=${genre}`
    );
    if (!response.ok) {
      alert("Нету резудьтата");
      throw new Error("Error searching");
    }

    const data: { Search: IMovie[] } = yield response.json();
    // @ts-ignore
    const errorSearch = data.Error;
    if (errorSearch) {
      alert("Фильм не найден");
    }

    const { Search } = data;

    yield put(setSearchMovies(Search));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchOneMovie(action: any) {
  const { id } = action;

  try {
    const response: Response = yield fetch(
      `http://www.omdbapi.com/?i=${id}&plot=full&apikey=${API_KEY}`
    );
    if (!response.ok) {
      alert("Нету резудьтата");
      throw new Error("Error searching");
    }

    const data: IOneMovie = yield response.json();
    yield put(setOneMovie(data));
  } catch (error: any) {
    console.log(error);
  }
}
