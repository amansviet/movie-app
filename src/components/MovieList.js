import React from "react";
import AddFavourites from "./AddFavourites";
const MovieList = (props) => {
  const FavouriteComponent = props.FavouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          className="image-container d-flex justify-content-start m-3"
          key={movie.imdbID}
        >
          <img src={movie.Poster} alt="movie"></img>
          <div
            onClick={() => props.handleFavouriteClick(movie)}
            className="overlay d-flex align-items-center justify-content"
          >
            <FavouriteComponent></FavouriteComponent>
          </div>
        </div>
      ))}
    </>
  );
};
export default MovieList;
