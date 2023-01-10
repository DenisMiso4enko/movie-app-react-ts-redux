import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IStore } from "../../models/StoreModel";
import { loadOneMovie } from "../../redux/actionCreators/moviesActionCreators";
import OneMovieItem from "./OneMovieItem";
import Header from "../Header/Header";

const OneMovie = () => {
  const { oneMovie } = useSelector((state: IStore) => state.movies);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadOneMovie(id!));
  }, []);
  return (
    <div>
      <Header />
      {oneMovie && <OneMovieItem {...oneMovie} />}
    </div>
  );
};

export default OneMovie;
