import { StaticImageData } from "next/image";
import React from "react";
import CreatorImage from "../CreatorImage";
import FeedUpdatedAt from "../FeedUpdatedAt";

const FeedComment = ({
  image,
  nickname,
  desc,
  updatedAt,
}: {
  image: string | StaticImageData;
  nickname: string;
  desc: string;
  updatedAt: string;
}) => {
  return (
    <div className="flex items-start">
      <div className="flex items-center gap-4 px-4 py-2">
        <CreatorImage profileImg={image} />
      </div>
      <div className="flex-1 pr-8 text-sm grid gap-2 py-2">
        <p className="space-x-2">
          <strong className="cursor-pointer">{nickname}</strong>
          <span>{desc}</span>
        </p>
        <FeedUpdatedAt updatedAt={updatedAt} />
      </div>
    </div>
  );
};

export default FeedComment;
