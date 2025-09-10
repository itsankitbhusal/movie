"use client";
import AppImage from "@/components/AppImage";
import { MouseEvent } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

interface IProps {
  title?: string;
  year?: number;
  genres?: string[];
  coverImage?: string;
  rating?: number;
  isDetailPage?: boolean;
  movieId?: number | string;
}

const MovieCard = ({
  coverImage,
  genres,
  rating,
  title,
  year,
  isDetailPage,
  movieId,
}: IProps) => {
  const [fav, setFav] = useLocalStorage("fav", "[]");

  const handleFavoriteClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (!movieId) return null;

    setFav((prevFav: string) => {
      const currentFavs = JSON.parse(prevFav || "[]");

      if (currentFavs.includes(movieId.toString())) {
        return JSON.stringify(
          currentFavs.filter((id: string) => id !== movieId.toString())
        );
      } else {
        return JSON.stringify([...currentFavs, movieId.toString()]);
      }
    });
  };

  const favorite = movieId
    ? JSON.parse(fav).includes(movieId.toString())
    : false;

  return (
    <div className=" w-full  sm:max-w-[20rem] ">
      <div className=" w-full relative ">
        <div className=" w-full h-[calc(100%-4rem)] overflow-hidden group cursor-pointer">
          <div className=" w-full">
            <AppImage
              src={coverImage || ""}
              alt={title || ""}
              width={300}
              height={500}
              className=" object-cover w-full rounded-sm"
            />
          </div>

          {isDetailPage ? null : (
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
          )}
        </div>
        {isDetailPage ? null : (
          <div className=" flex gap-[.6rem] justify-between items-center">
            <div className=" p-2 flex flex-col gap-1">
              <h3 className=" font-bold line-clamp-1">{title}</h3>
              <p className=" text-gray-600 text-sm">{year}</p>
            </div>
            {favorite ? (
              <div
                className=" p-2"
                title="Remove from favorite"
                onClick={handleFavoriteClick}
              >
                ❤️
              </div>
            ) : (
              <div
                className=" p-2"
                title="Toggle favorite"
                onClick={handleFavoriteClick}
              >
                🩶
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
