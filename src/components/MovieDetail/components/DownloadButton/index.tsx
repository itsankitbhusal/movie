import React from "react";

interface IProps {
  quality: string;
  size: string;
  url: string;
}

const DownloadButton = ({ quality, size, url }: IProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className=" bg-blue-500 w-fit px-[0.6rem] py-[0.3rem] rounded-[0.3rem] text-white hover:bg-blue-600 transition-colors">
        {quality} ({size})
      </div>
    </a>
  );
};

export default DownloadButton;
