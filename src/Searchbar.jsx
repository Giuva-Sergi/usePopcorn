import { useState } from "react";
import { fetchMovies, API_KEY } from "./utilities/utilities";
import { useInputFocus } from "./useInputFocus.js";

export default function Searchbar({
  setMovies,
  setIsLoading,
  setErrorMessage,
}) {
  const [query, setQuery] = useState("");
  const inputElement = useInputFocus(setMovies);

  const onSearch = function (e) {
    e.preventDefault();
    fetchMovies(API_KEY, query, setMovies, setIsLoading, setErrorMessage);
    setQuery("");
    setMovies([]);
    setErrorMessage("");
  };

  return (
    <form onSubmit={onSearch}>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputElement}
      />
    </form>
  );
}
