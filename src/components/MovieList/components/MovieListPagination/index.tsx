import logger from '@/utils/logger';
import React from 'react'
import ReactPaginate from 'react-paginate'

interface IProps {
    pageCount: number;
    handlePageChange: (selectedItem: { selected: number }) => void;
    page: number;
    marginPages: number;
    pageRange: number;
}

const MovieListPagination = ({ handlePageChange, page, marginPages, pageCount, pageRange }: IProps) => {
  logger.log({page, pageCount, marginPages, pageRange});
  return (
    <ReactPaginate
    pageCount={pageCount}
    onPageChange={handlePageChange}
    className="flex flex-wrap p-[0.5rem] sm:p-[1.5rem] md:p-[2rem] lg:p-[2.5rem] xl:p-[3rem] w-full gap-[0.75rem] justify-center list-none"
    pageClassName=" grid place-items-center border border-gray-200 rounded-sm"
    pageLinkClassName="px-[0.75rem] sm:px-[1rem] md:px-[1.25rem] lg:px-[1.5rem] py-[0.5rem] sm:py-[0.625rem] md:py-[0.75rem] rounded-sm cursor-pointer text-sm sm:text-base md:text-lg rounded-sm"
    activeClassName="bg-blue-500 text-white border border-blue-500"
    previousClassName=" grid place-items-center border border-gray-200 rounded-sm"
    nextClassName="grid place-items-center border border-gray-200 rounded-sm"
    nextLinkClassName="px-[0.6rem] sm:px-[1rem] md:px-[1.25rem] lg:px-[1.5rem] py-[0.5rem] sm:py-[0.625rem] md:py-[0.75rem] rounded-sm border border-gray-200 cursor-pointer text-sm sm:text-base md:text-lg rounded-sm"
    previousLinkClassName="px-[0.6rem] sm:px-[1rem] md:px-[1.25rem] lg:px-[1.5rem] py-[0.5rem] sm:py-[0.625rem] md:py-[0.75rem] rounded-sm border border-gray-200 cursor-pointer text-sm sm:text-base md:text-lg rounded-sm"
    disabledClassName="opacity-50 cursor-not-allowed"
    breakClassName="px-[0.6rem] sm:px-[1rem] md:px-[1.25rem] lg:px-[1.5rem] py-[0.5rem] sm:py-[0.625rem] md:py-[0.75rem] rounded-sm border border-gray-200 cursor-pointer text-sm sm:text-base md:text-lg"
    marginPagesDisplayed={marginPages}
    pageRangeDisplayed={pageRange}
    // initialPage={page - 1}
    forcePage={page - 1}
    previousLabel="Prev"
    nextLabel="Next"
  />  )
}

export default MovieListPagination