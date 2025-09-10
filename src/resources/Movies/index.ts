import { apiUrls } from "@/constants/apiUrls";
import {
  IMovieDetailResponse,
  IMovieList,
  IPageParams,
} from "@/resources/Movies/interface";
import fetchWrapper from "@/utils/fetchWrapper";

export const getMovies = async (
  pageParams?: IPageParams
): Promise<IMovieList> => {
  const params = new URLSearchParams();

  const appendParam = (key: string, value?: string | number | boolean) => {
    if (value !== undefined) {
      params.append(key, String(value));
    }
  };

  appendParam("limit", pageParams?.limit);
  appendParam("page", pageParams?.page);
  appendParam("quality", pageParams?.quality);
  appendParam("minimum_rating", pageParams?.minimum_rating);
  appendParam("query_term", pageParams?.query_term);
  appendParam("genre", pageParams?.genre);
  appendParam("sort_by", pageParams?.sort_by);
  appendParam("order_by", pageParams?.order_by);
  appendParam("with_rt_ratings", pageParams?.with_rt_ratings);

  const response = await fetchWrapper(
    `${apiUrls.Movies.getMovieList}?${params.toString()}`
  );

  return response?.data;
};

export const getMovieDetail = async (
  id: string
): Promise<IMovieDetailResponse> => {
  if (!id) {
    throw new Error("Movie id not provided");
  }
  const params = new URLSearchParams();

  params.append("movie_id", id);
  const response = await fetchWrapper(
    `${apiUrls.Movies.getMovieDetail}?${params.toString()}`
  );

  return response;
};
