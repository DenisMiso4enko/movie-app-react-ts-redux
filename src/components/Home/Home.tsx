import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IStore } from "../../models/StoreModel";
import {
  loadMovies,
  setSearchValue,
} from "../../redux/actionCreators/moviesActionCreators";
import MovieItem from "../MovieItem/MovieItem";
import Header from "../Header/Header";

const Home = () => {
  const type = "movie";
  const { movies } = useSelector((state: IStore) => state.movies);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchValue(""));
    dispatch(loadMovies({ currentPage, type }));
  }, [currentPage]);

  return (
    <div>
      <Header />
      <button onClick={() => setCurrentPage(1)}>На главную</button>
      <div className="movie-container">
        {movies &&
          movies.map((movie) => <MovieItem key={movie.imdbID} {...movie} />)}
      </div>
      <button onClick={() => setCurrentPage((prev) => prev + 1)}>
        Загрузить еще
      </button>
    </div>
  );
};

export default Home;
