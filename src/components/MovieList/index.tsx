"use client";
import MovieCard from "@/components/MovieCard";
import { useGetMovies } from "@/hooks/useMovies";
import { getMovies } from "@/resources/Movies";
import { IPageParams } from "@/resources/Movies/interface";
import logger from "@/utils/logger";
import React from "react";

interface IProps extends IPageParams {}

const MovieList = ({
  genre,
  limit,
  minimum_rating,
  order_by,
  page,
  quality,
  query_term,
  sort_by,
  with_rt_ratings,
}: IProps) => {
  const {
    data: movies,
    isLoading: moviesLoading,
    error: moviesError,
  } = useGetMovies({
    ...(genre && { genre }),
    ...(limit && { limit }),
    ...(minimum_rating && { minimum_rating }),
    ...(order_by && { order_by }),
    ...(page && { page }),
    ...(quality && { quality }),
    ...(query_term && { query_term }),
    ...(sort_by && { sort_by }),
    ...(with_rt_ratings && { with_rt_ratings }),
  });

  const handleSubmit = (e: React.FormEvent) => {
    const formValues = new FormData(e.target as HTMLFormElement);
    const query = formValues.get("movie-search");
    logger.log("Search Query: ", query);
    e.preventDefault();
  };
  return (
    <div className=" max-w-[1400px] mx-auto">
      <form onSubmit={handleSubmit}>
        <input type="text" name="movie-search" placeholder="Search Movie" />
      </form>
      <div className=" grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies?.movies?.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              coverImage={movie.medium_cover_image}
              genres={movie.genres}
              rating={movie.rating}
              title={movie.title}
              year={movie.year}
              slug={movie.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
