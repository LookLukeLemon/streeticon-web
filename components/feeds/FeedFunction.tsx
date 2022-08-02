import { FEED_LIKE, FEED_REPLY } from "common/Constants";
import BaseImage from "components/common/BaseImage";
import CommentImage from "public/images/comment.svg";
import LikeImage from "public/images/like.svg";
import BookmarkImage from "public/images/bookmark.svg";
import { FeedItemProps } from "common/types";
import FeedDetail from "./feed-detail/FeedDetail";

const FeedFunction = ({ props }: { props: FeedItemProps }) => {
  return (
    <div className="flex gap-4 px-4">
      <div className="flex-1 flex gap-4 text-sm ">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="relative h-5 aspect-square">
            <BaseImage src={LikeImage} layout="fill" objectFit="cover" />
          </div>
          <span>{FEED_LIKE}</span>
        </div>

        <FeedDetail props={props}>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="relative h-5 aspect-square">
              <BaseImage src={CommentImage} layout="fill" objectFit="cover" />
            </div>
            <span>{FEED_REPLY}</span>
          </div>
        </FeedDetail>
      </div>
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="relative h-5 aspect-square">
          <BaseImage src={BookmarkImage} layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default FeedFunction;
