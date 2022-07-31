import ColorBlurImage from "components/common/ColorBlurImage";
import { StaticImageData } from "next/image";
import React from "react";

const CreatorImage = ({
  profileImg,
}: {
  profileImg: string | StaticImageData;
}) => {
  return (
    <div className="relative h-10 aspect-square rounded-full overflow-hidden">
      <ColorBlurImage src={profileImg} layout="fill" objectFit="cover" />
    </div>
  );
};

export default CreatorImage;
