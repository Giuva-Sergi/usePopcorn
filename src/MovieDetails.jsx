import StarRating from "./StarRating.jsx";
import { useEffect } from "react";

export default function MovieDetails({
  selectedMovie,
  onSelectedMovie,
  onAddWatched,
  userRating,
  onSetRating,
  watched,
}) {
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = selectedMovie;

  const isRated = watched.some(
    (movie) => movie.imdbID === selectedMovie.imdbID
  );

  useEffect(() => {
    document.title = selectedMovie
      ? `Movie | ${selectedMovie.Title}`
      : document.title;
    return () => (document.title = "usePopcorn");
  }, [selectedMovie]);

  useEffect(() => {
    const handleEscapeKey = function (e) {
      if (e.code === "Escape") onSelectedMovie(null);
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  return (
    <div className="details">
      <header>
        <button className="btn-back" onClick={() => onSelectedMovie(null)}>
          &larr;
        </button>
        <img src={poster} alt={`Poster of ${title}`} />
        <div className="details-overview">
          <h2>{title}</h2>
          <p>
            {released} &bull; {runtime}
          </p>
          <p>{genre}</p>
          <p>
            <span>⭐</span>
            {imdbRating} IMDb rating
          </p>
        </div>
      </header>
      <section>
        <div className="rating">
          {isRated ? (
            <p>You already rated this movie</p>
          ) : (
            <>
              <StarRating
                maxRating={10}
                size={24}
                onSetRating={onSetRating}
                rating={userRating}
              />
              {userRating > 0 ? (
                <button
                  className="btn-add"
                  onClick={() => {
                    onAddWatched(selectedMovie);
                    onSelectedMovie(null);
                  }}
                >
                  Add to watched
                </button>
              ) : (
                ""
              )}
            </>
          )}
        </div>
        <p>
          <em>{plot}</em>
        </p>
        <p>Starring {actors}</p>
        <p>Directed by {director}</p>
      </section>
    </div>
  );
}
