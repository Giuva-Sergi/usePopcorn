import Movie from "./Movie";

export default function MovieList({
  movies,
  onSelectedMovie,
  selectedMovie,
  onSetError,
}) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          selectedMovie={selectedMovie}
          onSelectedMovie={onSelectedMovie}
          onSetError={onSetError}
        />
      ))}
    </ul>
  );
}
