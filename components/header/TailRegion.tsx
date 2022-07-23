import React from "react";
import SendImage from "public/images/send.svg";
import LikeImage from "public/images/like.svg";
import UserImage from "public/images/user.jpeg";
import BaseImage from "components/common/BaseImage";

const TailRegion = () => {
  return (
    <div className="md:w-64 w-fit flex items-center justify-end gap-4 px-4 md:px-8">
      <div className="relative cursor-pointer h-6 aspect-square">
        <BaseImage src={SendImage} layout="fill" objectFit="cover" />
      </div>

      <div className="relative cursor-pointer h-6 aspect-square">
        <BaseImage src={LikeImage} layout="fill" objectFit="cover" />
      </div>

      <div className="relative cursor-pointer h-6 aspect-square rounded-full">
        <BaseImage src={UserImage} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default TailRegion;
