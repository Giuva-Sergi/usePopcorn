export default function WatchedMovie({ movie, onDeleteWatched }) {
  const {
    Title: title,
    Poster: poster,
    imdbRating,
    userRating,
    Runtime: runtime,
  } = movie;
  return (
    <li>
      <img src={poster} alt={`${title} poster`} />
      <h3>{title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{runtime}</span>
        </p>
        <button className="btn-delete" onClick={() => onDeleteWatched(movie)}>
          X
        </button>
      </div>
    </li>
  );
}
