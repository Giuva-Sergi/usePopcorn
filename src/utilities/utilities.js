export const API_KEY = "f3543447";

export const fetchMovies = async function (
  key,
  query,
  setterMovies,
  setterLoading,
  setterError
) {
  try {
    setterLoading(true);
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=${key}&s="${query}"`
    );
    if (!res.ok) {
      throw new Error("Network response was not ok!");
    }
    const data = await res.json();
    if (data.Response === "False") {
      throw new Error(
        "😕 The movie you're looking for doesn't exist. Please make sure you input a valid title..."
      );
    }
    setterMovies(data.Search);
  } catch (error) {
    console.error("There was some error with your request:", error.message);
    setterError(error.message);
  } finally {
    setterLoading(false);
  }
};

export const fetchMovie = async function (movie, key, setterError) {
  try {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&i=${movie}`);
    if (!res.ok) {
      throw new Error("Network response was not ok!");
    }
    const data = await res.json();
    if (data.Response === "False") {
      throw new Error();
    }
    return data;
  } catch (error) {
    setterError(error.message);
  }
};
