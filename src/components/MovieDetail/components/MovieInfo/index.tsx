import React from "react";
import { IMovie } from "@/resources/Movies/interface";

interface IProps {
  movie: IMovie;
}

const MovieInfo = ({ movie }: IProps) => {
  const genres = movie.genres ? movie.genres.join(", ") : "N/A";

  return (
    <div className=" grid gap-[.6rem]">
      <h2 className="text-[1.5rem] sm:text-[2rem] font-bold">
        {movie.title_long} [{movie.language}]
      </h2>

      <div>
        <h2 className="font-semibold">Genres:</h2>
        <p className="text-gray-600">{genres}</p>
      </div>
    </div>
  );
};

export default MovieInfo;
