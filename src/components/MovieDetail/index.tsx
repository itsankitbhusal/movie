import React from "react";
import MovieCard from "@/components/MovieCard";
import { IMovie } from "@/resources/Movies/interface";
import MovieMeta from "@/components/MovieDetail/components/MovieMeta";
import MovieInfo from "@/components/MovieDetail/components/MovieInfo";
import MovieSynopsis from "@/components/MovieDetail/components/MovieSynopsis";
import MovieDownloads from "@/components/MovieDetail/components/MovieDownloads";
import logger from "@/utils/logger";
import AppImage from "@/components/AppImage";

interface IProps {
  movie: IMovie;
}

const MovieDetail = ({ movie }: IProps) => {
  logger.log({ movie });
  return (
    <div className="w-full min-h-screen p-[1rem] grid place-items-center relative">
      <div className="absolute inset-0 -z-10">
        <AppImage
          alt={movie.title}
          src={movie.background_image}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>
      <div className="flex flex-col sm:flex-row gap-[1rem] lg:gap-[2rem]">
        <div className="w-full sm:w-[20rem] grid gap-[.6rem]">
          <MovieCard
            coverImage={movie.medium_cover_image}
            genres={movie.genres}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
            isDetailPage
          />
          <MovieMeta movie={movie} />
        </div>

        <div className="flex flex-col gap-[.6rem]  sm:max-w-[50vw]">
          <MovieInfo movie={movie} />
          <MovieSynopsis description={movie.description_full} />
          <MovieDownloads torrents={movie.torrents} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
