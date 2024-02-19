import { useState, useRef } from "react";
import Navbar from "./NavBar";
import MainComponent from "./MainComponent";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import NumResults from "./NumResults";
import Box from "./Box";
import WatchedMoviesStatistics from "./WatchedMoviesStatistics";
import WatchedMovieList from "./WatchedMovieList";
import MovieList from "./MovieList";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import MovieDetails from "./MovieDetails";
import { useLocalStorageState } from "./useLocalStorageState.js";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [userRating, setUserRating] = useState(null);
  const [watched, setWatched] = useLocalStorageState("watched");
  const ratingCount = useRef(0);

  const handleAddWatched = function (movie) {
    const watchedMovie = {
      ...movie,
      userRating,
      ratingCount: ratingCount.current,
    };
    setWatched((prevArray) => [...prevArray, watchedMovie]);
    setUserRating(null);
    ratingCount.current = 0;
  };

  const handleDeleteWatched = function (movie) {
    setWatched(
      watched.filter((watchedMovie) => watchedMovie.imdbID !== movie.imdbID)
    );
  };

  return (
    <>
      <Navbar>
        <Logo />
        <Searchbar
          setMovies={setMovies}
          setIsLoading={setIsLoading}
          setErrorMessage={setErrorMessage}
        />
        <NumResults movies={movies} />
      </Navbar>
      <MainComponent>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !errorMessage && (
            <MovieList
              movies={movies}
              selectedMovie={selectedMovie}
              onSelectedMovie={setSelectedMovie}
              onSetError={setErrorMessage}
            />
          )}
          {errorMessage && <ErrorMessage message={errorMessage} />}
        </Box>

        <Box selectedMovie={selectedMovie}>
          {selectedMovie ? (
            <MovieDetails
              selectedMovie={selectedMovie}
              onSelectedMovie={setSelectedMovie}
              onAddWatched={handleAddWatched}
              userRating={userRating}
              onSetRating={setUserRating}
              watched={watched}
              count={ratingCount}
            />
          ) : (
            <>
              <WatchedMoviesStatistics watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </MainComponent>
    </>
  );
}
