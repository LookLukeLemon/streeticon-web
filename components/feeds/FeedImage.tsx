import ColorBlurImage from "components/common/ColorBlurImage";
import { StaticImageData } from "next/image";
import React from "react";

const FeedImage = ({ image }: { image: string | StaticImageData }) => {
  return (
    <div className="relative h-96 md:mx-4 md:rounded-lg overflow-hidden">
      <ColorBlurImage src={image} layout="fill" objectFit="cover" />
    </div>
  );
};

export default FeedImage;
