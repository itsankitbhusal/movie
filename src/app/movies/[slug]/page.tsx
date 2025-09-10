import React from "react";
import MovieDetail from "@/components/MovieDetail";
import { getMovieDetail } from "@/resources/Movies";
import { notFound } from "next/navigation";
import logger from "@/utils/logger";

interface IProps {
  params: Promise<{
    slug: string;
  }>;
}

const getMovieDetailData = async (movieId: string) => {
  try {
    const response = await getMovieDetail(movieId);
    const movie = response?.data?.movie || null;

    return {
      movie: movie,
      error: null,
    };
  } catch (error) {
    logger.error("Error fetching movie detail:", error);
    return {
      movie: null,
      error:
        error instanceof Error
          ? error.message
          : "Failed to fetch movie details",
    };
  }
};

const Movie = async ({ params }: IProps) => {
  const { slug } = await params;
  const movieId = slug.split("-").pop();

  if (!movieId) {
    notFound();
  }

  const { movie, error } = await getMovieDetailData(movieId);
  if (error || !movie) {
    notFound();
  }

  return <MovieDetail movie={movie} />;
};

export default Movie;
