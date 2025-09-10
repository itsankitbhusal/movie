import React from "react";
import { ITorrent } from "@/resources/Movies/interface";
import DownloadButton from "@/components/MovieDetail/components/DownloadButton";

interface IProps {
  torrents?: ITorrent[];
}

const MovieDownloads = ({ torrents }: IProps) => {
  if (!torrents || torrents.length === 0) return null;

  return (
    <div>
      <h2 className="font-semibold">Download Torrents:</h2>
      <ul className="flex gap-[0.6rem] flex-wrap">
        {torrents.map((torrent) => (
          <DownloadButton
            key={torrent.hash}
            quality={torrent.quality}
            size={torrent.size}
            url={torrent.url}
          />
        ))}
      </ul>
    </div>
  );
};

export default MovieDownloads;
