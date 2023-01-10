import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../models/StoreModel";
import { searchMovies } from "../../redux/actionCreators/moviesActionCreators";
import MovieItem from "../MovieItem/MovieItem";
import Header from "../Header/Header";

const SearchResult = () => {
  const { searchResult, searchValue, searchGenre, searchYear } = useSelector(
    (state: IStore) => state.movies
  );
  console.log(searchGenre);
  console.log(searchYear);

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(
      searchMovies({
        currentPage,
        searchValue,
        genre: searchGenre,
        year: searchYear,
      })
    );
  }, [currentPage, searchGenre, searchYear]);
  return (
    <div>
      <Header />
      <h1 className="title">Search Results</h1>
      <div className="movie-container">
        {searchResult &&
          searchResult.map((result) => (
            <MovieItem key={result.imdbID} {...result} />
          ))}
      </div>

      <button onClick={() => setCurrentPage((prev) => prev + 1)}>
        Загрузить еще
      </button>
    </div>
  );
};

export default SearchResult;
