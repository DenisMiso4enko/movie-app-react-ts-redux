import { useDispatch, useSelector } from "react-redux";
import { IOneMovie } from "../../models/MovieModel";
import { addToFavorite } from "../../redux/actionCreators/moviesActionCreators";
import { IStore } from "../../models/StoreModel";

const OneMovieItem = (props: IOneMovie) => {
  const {
    Title,
    Actors,
    Awards,
    BoxOffice,
    Country,
    DVD,
    Director,
    Genre,
    Language,
    Metascore,
    Plot,
    Poster,
    Production,
    Rated,
    Ratings,
    Released,
    Response,
    Runtime,
    Type,
    Year,
    Website,
    Writer,
    imdbID,
    imdbRating,
    imdbVotes,
  } = props;
  const { user } = useSelector((state: IStore) => state.user);

  const dispatch = useDispatch();

  const handleAddToFavorite = () => {
    const favoriteMovie = {
      imdbID,
      imdbRating,
      Poster,
      Title,
      Genre,
    };
    // @ts-ignore
    dispatch(addToFavorite(favoriteMovie)); // !!!!! разобраться с типом
  };

  const genres = Genre.split(",");
  console.log(genres);
  return (
    <div className="full-movie">
      <h1>{Title}</h1>
      <div className="full-movie__main">
        <div className="full-movie__img">
          <img src={Poster} alt="poster" />
          <span className="movie-rating">{imdbRating}</span>
          <div className="movie-genres">
            {genres.map((item) => (
              <span className="movie-genres__item" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="full-movie__info">
          <p>Actors: {Actors}</p>
          <p>Awards: {Awards}</p>
          <p>Country: {Country}</p>
          <p>Director: {Director}</p>
          <p>Writer: {Writer}</p>
          <p>Year: {Year}</p>
          <p>Runtime: {Runtime}</p>
          <p>BoxOffice: {BoxOffice}</p>
          <p>DVD: {DVD}</p>
          <p>Type: {Type}</p>
        </div>
      </div>

      <div className="full-movie__desc">
        <p>{Plot}</p>
      </div>
      {user && <button onClick={handleAddToFavorite}>Add to favorite</button>}
    </div>
  );
};

export default OneMovieItem;
