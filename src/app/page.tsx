import MovieList from "@/components/MovieList";
import { IPageParams } from "@/resources/Movies/interface";
import React from "react";
interface IProps {
  searchParams: IPageParams;
}

const Page = async({ searchParams }: IProps) => {
  const awaitedSearchParams = await searchParams;
  return <MovieList {...awaitedSearchParams} />;
};

export default Page;
