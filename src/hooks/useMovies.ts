import { API } from "@/resources";
import { IPageParams } from "@/resources/Movies/interface";
import { useQuery } from "@tanstack/react-query";

export const movieKeys = {
  GET_MOVIE_LIST: "get_movie_list",
};

export const useGetMovies = (pageParams?: IPageParams) => {
  return useQuery({
    queryKey: [movieKeys.GET_MOVIE_LIST],
    queryFn: () => API.Movies.getMovies(pageParams),
  });
};
