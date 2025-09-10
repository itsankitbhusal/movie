"use client";
import AppImage from "@/components/AppImage";
import Link from "next/link";

interface IProps {
  title?: string;
  year?: number;
  genres?: string[];
  coverImage?: string;
  rating?: number;
  slug?: string;
  movieId: number;
}

const MovieCard = ({
  coverImage,
  genres,
  rating,
  title,
  year,
  slug,
  movieId,
}: IProps) => {
  const dynamicSlug = movieId && slug ? `${slug}-${movieId}` : `${movieId}`;

  return (
    <Link
      href={`/movies/${dynamicSlug}`}
      className=" w-full  sm:max-w-[20rem] sm:w-full border rounded-sm border-gray-100"
    >
      <div className=" w-full relative ">
        <div className=" w-full h-[calc(100%-4rem)] overflow-hidden group cursor-pointer">
          <div className=" w-full">
            <AppImage
              src={coverImage || ""}
              alt={title || ""}
              width={300}
              height={500}
              className=" object-cover w-full"
            />
          </div>

          <div className=" absolute w-full h-[calc(100%-4rem)] hover:bg-black/80 inset-0 flex flex-col gap-[.8rem] p-4 items-center justify-center text-2xl opacity-0 group-hover:opacity-100 ">
            {rating ? (
              <div className="grid place-items-center">
                <span>⭐</span>
                <p className=" text-yellow-500 font-bold">{rating}/10</p>
              </div>
            ) : null}
            <div className=" text-white text-center">
              {genres && genres?.length > 0
                ? genres?.map((genre) => {
                    return (
                      <div key={genre}>
                        <p className=" font-bold">{genre}</p>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
        <div className=" p-2 flex flex-col gap-1">
          <h3 className=" font-bold line-clamp-1">{title}</h3>
          <p className=" text-gray-600 text-sm">{year}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
