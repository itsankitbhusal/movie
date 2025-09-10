"use client";

interface IProps {
  error: Error & { digest?: string };
  reset: () => void;
}

import logger from "@/utils/logger";
import React, { useEffect } from "react";

const Error = ({ error, reset }: IProps) => {
  useEffect(() => {
    logger.error("Error:", error);
  }, [error]);
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4 text-center bg-gray-100 p-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-red-600">
        Something went wrong!
      </h1>
      <p className="text-gray-700 max-w-md">
        {error.message || "An unexpected error occurred."}
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
