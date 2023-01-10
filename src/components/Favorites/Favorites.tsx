import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../models/StoreModel";
import MovieItem from "../MovieItem/MovieItem";
import Header from "../Header/Header";

const Favorites = () => {
  const { favorites } = useSelector((state: IStore) => state.movies);

  return (
    <div>
      <Header />
      <div className="movie-container">
        {favorites.length === 0 && <h1>Empty</h1>}
        {favorites &&
          favorites.map((movie) => <MovieItem key={movie.imdbID} {...movie} />)}
      </div>
    </div>
  );
};

export default Favorites;
