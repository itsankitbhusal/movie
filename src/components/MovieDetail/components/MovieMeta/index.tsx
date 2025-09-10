import React from "react";
import { IMovie } from "@/resources/Movies/interface";

interface IProps {
  movie: IMovie;
}

const MovieMeta = ({ movie }: IProps) => (
  <div className="flex flex-wrap gap-[0.8rem] text-gray-600 ">
    {movie.like_count ? <span>💙 {movie.like_count} likes</span> : null}
    {movie.rating ? <span>⭐ {movie.rating}/10</span> : null}
    <span>🎬 {movie.runtime} min</span>
  </div>
);

export default MovieMeta;
