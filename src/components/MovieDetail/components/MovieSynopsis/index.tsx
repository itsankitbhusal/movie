import React from "react";

interface IProps {
  description: string;
}

const MovieSynopsis = ({ description }: IProps) => (
  <div>
    <h2 className="font-semibold">Synopsis:</h2>
    <p className="text-gray-600 sm:min-h-[8rem]">
      {description || "No description available."}
    </p>
  </div>
);

export default MovieSynopsis;
