import { Link } from "react-router-dom";
import { IMovie } from "../../models/MovieModel";

const MovieItem = ({ imdbID, Title, Poster, Year }: IMovie) => {
  return (
    <div className="movie-item" key={imdbID}>
      <img src={Poster} alt="poster" />
      <h2 className="movie-title">
        <Link to={`/movie/${imdbID}`}>{Title}</Link>
      </h2>
      <span>{Year}</span>
    </div>
  );
};

export default MovieItem;
