import { API_KEY, fetchMovie } from "./utilities/utilities";

export default function Movie({ movie, onSelectedMovie, onSetError }) {
  const onClick = async function (movie) {
    const clickedMovie = await fetchMovie(movie.imdbID, API_KEY, onSetError);
    onSelectedMovie(clickedMovie);
  };

  return (
    <li onClick={() => onClick(movie)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
