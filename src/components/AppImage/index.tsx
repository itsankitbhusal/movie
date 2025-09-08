"use client";
import Image, { ImageProps } from "next/image";
import React, { useState } from "react";

const AppImage = ({ src, alt, ...rest }: ImageProps) => {
  const placeholder = `https://placehold.co/230x345/png?text=img`;
  const [imgSrc, setImgSrc] = useState(src || placeholder);

  const handleError = () => {
    setImgSrc(placeholder);
  };

  return <Image src={imgSrc} onError={handleError} alt={alt} {...rest} />;
};

export default AppImage;
