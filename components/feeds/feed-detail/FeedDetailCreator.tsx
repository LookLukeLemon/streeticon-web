import { StaticImageData } from "next/image";
import React from "react";
import CreatorDesc from "../CreatorDesc";
import CreatorImage from "../CreatorImage";

const FeedDetailCreator = ({
  image,
  nickname,
  region,
  country,
}: {
  image: string | StaticImageData;
  nickname: string;
  region: string;
  country: string;
}) => {
  return (
    <div className="flex items-center gap-4 px-4 py-2">
      <CreatorImage profileImg={image} />
      <CreatorDesc name={nickname} region={region} country={country} />
    </div>
  );
};

export default FeedDetailCreator;
