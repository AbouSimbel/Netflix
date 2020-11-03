import React from "react";
import Movie from "./Movie";

const Movies = (props) => {
  return (
    <div className="moviesList">
      {props.data.map((item, i) => {
        return (
          <Movie
          key={i}
          data={item}
          />
        )
      })}
    </div>
  )
}

export default Movies;