import { FEED_LIKE } from "common/Constants";
import { FeedItemWriterProps } from "common/types";
import BaseImage from "components/common/BaseImage";
import React from "react";
import { classNames } from "utils";

const FeedLikeWithCount = ({
  likePeople,
  likeCount,
}: {
  likePeople: FeedItemWriterProps[];
  likeCount: number;
}) => {
  return (
    <div className="px-4 flex items-center relative">
      {likePeople?.map((p, idx) => {
        const leftOffset = idx * 4;
        return (
          <div
            key={idx}
            style={{ transform: `translate(-${leftOffset}px, 0)` }}
            className={classNames(
              "relative h-6 aspect-square rounded-full overflow-hidden ring-2 border-2 border-black ring-white"
            )}
          >
            <BaseImage src={p.image} layout="fill" objectFit="cover" />
          </div>
        );
      })}

      <span className="text-sm font-semibold">
        {`${FEED_LIKE} ${likeCount}개`}
      </span>
    </div>
  );
};

export default FeedLikeWithCount;
