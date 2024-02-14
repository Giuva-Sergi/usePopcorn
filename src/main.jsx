import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import StarRating from "./StarRating";
import { useState } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <StarRating
        color={"steelblue"}
        rating={movieRating}
        onSetRating={setMovieRating}
      />
      <p>
        {movieRating
          ? `This movie was rated ${movieRating} ${
              movieRating === 1 ? "star" : "stars"
            }`
          : ""}
      </p>
    </>
  );
}
