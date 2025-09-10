import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface IProps {
  onSearch: (e: FormEvent) => void;
  initialValue?: string;
}

const MovieSearch = ({ onSearch, initialValue }: IProps) => {
  const [searchTerm, setSearchTerm] = useState(initialValue || "");

  useEffect(() => {
    setSearchTerm(initialValue || "");
  }, [initialValue]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }
  return (
    <form
      onSubmit={onSearch}
      className=" flex flex-wrap sm:flex-nowrap justify-center items-center my-[2rem] sm:gap-[1rem]"
    >
      <input
        type="text"
        name="movie-search"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search Movie"
        className=" my-[.6rem] sm:my-[1rem] border rounded-sm border-gray-200 px-[.6rem] sm:px-[1rem] py-[.3rem] sm:py-[.8rem] w-full sm:w-auto"
      />
      <button
        type="submit"
        className=" border rounded-sm border-blue-500 px-[1rem] sm:px-[2rem] py-[.4rem] sm:py-[.8rem] bg-blue-500 text-white cursor-pointer w-full sm:w-auto"
      >
        Search
      </button>
    </form>
  );
};

export default MovieSearch;
