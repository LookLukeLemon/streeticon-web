import BaseImage from "components/common/BaseImage";
import SendImage from "public/images/send.svg";
import LikeImage from "public/images/like.svg";
import UserImage from "public/images/user.svg";
import CommentImage from "public/images/comment.svg";
import SettingImage from "public/images/setting.svg";
import BookmarkImage from "public/images/bookmark.svg";
import FeedLikeWithCount from "../FeedLikeWithCount";
import FeedUpdatedAt from "../FeedUpdatedAt";

const FeedDetailFunction = ({
  likePeople,
  likeCount,
  updatedAt,
}: {
  likePeople: any[];
  likeCount: number;
  updatedAt: string;
}) => {
  return (
    <div>
      <div className="p-4 flex gap-4">
        <div className="relative cursor-pointer h-6 aspect-square">
          <BaseImage src={LikeImage} layout="fill" objectFit="cover" />
        </div>

        <div className="relative cursor-pointer h-6 aspect-square">
          <BaseImage src={CommentImage} layout="fill" objectFit="cover" />
        </div>

        <div className="relative cursor-pointer h-6 aspect-square">
          <BaseImage src={SendImage} layout="fill" objectFit="cover" />
        </div>
        <div className="flex-1" />
        <div className="relative cursor-pointer h-6 aspect-square">
          <BaseImage src={BookmarkImage} layout="fill" objectFit="cover" />
        </div>
      </div>
      <FeedLikeWithCount likePeople={likePeople} likeCount={likeCount} />
      <div className="px-4 py-2">
        <FeedUpdatedAt updatedAt={updatedAt} />
      </div>
    </div>
  );
};

export default FeedDetailFunction;
