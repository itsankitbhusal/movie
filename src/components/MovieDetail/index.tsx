import React from "react";
import { IMovie } from "@/resources/Movies/interface";

interface IProps {
  movie: IMovie;
}

const MovieDetail = ({ movie }: IProps) => {
  return (
    <div>
      <h1>Movie Detail</h1>
      <h2>{movie.title}</h2>
    </div>
  );
};

export default MovieDetail;
