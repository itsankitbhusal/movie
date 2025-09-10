"use client";
import MovieCard from "@/components/MovieCard";
import MovieError from "@/components/MovieList/components/MovieError";
import MovieListPagination from "@/components/MovieList/components/MovieListPagination";
import MovieLoading from "@/components/MovieList/components/MovieLoading";
import MovieNotFound from "@/components/MovieList/components/MovieNotFound";
import MovieSearch from "@/components/MovieList/components/MovieSearch";
import { useGetMovies } from "@/hooks/useMovies";
import { IPageParams } from "@/resources/Movies/interface";
import logger from "@/utils/logger";
import { useRouter, useSearchParams } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

// interface IProps extends IPageParams {}

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
}: IPageParams) => {
  const searchParams = useSearchParams();
  const router = useRouter();

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
  logger.log("page from rpops:", page);

  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1024 });

  const [localPage, setLocalPage] = useState(Number(page) || 1);

  const initialSearch = searchParams.get("query_term") || "";

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const formValues = new FormData(e.target as HTMLFormElement);
    const query = formValues.get("movie-search");
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("query_term", query.toString());
      params.set("page", "1");
    } else {
      params.delete("query_term");
      params.set("page", "1");
    }
    router.replace(`/?${params.toString()}`);
    logger.log("Search Query: ", query);
    e.preventDefault();
  };

  useEffect(() => {
    setLocalPage(Number(page) || 1);
  }, [page]);

  const handlePageChange = (event?: { selected?: number }) => {
    const params = new URLSearchParams(searchParams);
    if (event?.selected) {
      params.set("page", (event.selected + 1).toString());
      router.replace(`/?${params.toString()}`);
    } else {
      params.set("page", "1");
      router.replace(`/?${params.toString()}`);
    }
    // logger.log("event: ", event?.selected);
    setLocalPage((event?.selected ?? 0) + 1);
  };

  const pageCount = movies?.movie_count
    ? Math.ceil(movies.movie_count / (limit || 20))
    : 0;

  const pageRange = isMobile ? 2 : isTablet ? 3 : 5;
  const marginPages = isMobile ? 1 : 2;

  return (
    <div className=" max-w-[1400px] mx-auto px-[1rem]">
      <MovieSearch onSearch={handleSearch} initialValue={initialSearch} />
      <div className=" grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1.8rem] min-h-[100vh]">
        {moviesLoading ? (
          <MovieLoading />
        ) : moviesError ? (
          <MovieError />
        ) : movies?.movies && movies.movies.length > 0 ? (
          movies?.movies?.map((movie) => {
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
          })
        ) : (
          <MovieNotFound />
        )}
      </div>
      <div className="my-[2rem] sm:my-[1.6rem] md:my-[1rem] lg:my-[0.6rem] flex justify-center">
        <MovieListPagination
          handlePageChange={handlePageChange}
          pageCount={pageCount}
          pageRange={pageRange}
          marginPages={marginPages}
          page={localPage}
        />
      </div>
    </div>
  );
};

export default MovieList;
