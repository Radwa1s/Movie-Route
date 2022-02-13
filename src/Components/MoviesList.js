import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard/MovieCard";

const MoviesList = ({ moviesData, ratingSearch, nameSearch }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {moviesData
        .filter(
          (el) =>
            el.rating >= ratingSearch &&
            el.name.toLowerCase().includes(nameSearch.toLowerCase().trim())
        )
        .map((el) => (
          <Link to={`/description/${el.id}`}>
            <MovieCard movie={el} />
          </Link>
        ))}
    </div>
  );
};

export default MoviesList;
