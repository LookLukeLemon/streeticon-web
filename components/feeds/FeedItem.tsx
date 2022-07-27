import BaseImage from "components/common/BaseImage";
import { FiMoreVertical } from "react-icons/fi";
import CommentImage from "public/images/comment.svg";
import LikeImage from "public/images/like.svg";
import BookmarkImage from "public/images/bookmark.svg";
import EmojiImage from "public/images/emoji.svg";
import { StaticImageData } from "next/image";
import { classNames, formatDistanceToNowStrictForKorea } from "utils";
import {
  FEED_ACTION_REPLY,
  FEED_LIKE,
  FEED_REPLY,
  FEED_VIEW_REPLY,
} from "common/Constants";
import { useState } from "react";
import ColorBlurImage from "components/common/ColorBlurImage";
import usePostFeedComment, {
  PostFeedCommentProps,
} from "hooks/usePostFeedComment";
import LoadingSpinner from "components/common/LoadingSpinner";
import FeedDetail from "./feed-detail/FeedDetail";

export type FeedItemWriterProps = {
  image: StaticImageData | string;
  name: string;
  country: string;
  region: string;
  desc: string;
};

export type FeedItemProps = {
  feedNumber: string;
  desc: string;
  writer: FeedItemWriterProps;
  createdAt: string;
  likeCount: number;
  likePeople: FeedItemWriterProps[];
  commentCount: number;
  comments: [];
  image: StaticImageData;
  page: number;
  refetch: () => void;
};

const FeedItem = (props: FeedItemProps) => {
  const {
    feedNumber,
    writer,
    likeCount,
    desc,
    likePeople,
    commentCount,
    comments,
    image,
    createdAt,
    page,
  } = props;
  const { name, country, region, image: profileImg } = writer;
  const [yourComment, setYourComment] = useState("");

  const handleYourCommentChange = (e: any) => {
    setYourComment(e.target.value);
  };

  const handlePostCommentSuccess = () => {
    setYourComment("");
  };

  const { mutate, isLoading } = usePostFeedComment(handlePostCommentSuccess);

  const handlePostComment = async (jsonBody: PostFeedCommentProps) => {
    await mutate(jsonBody);
  };

  const handleShowDetail = () => {};

  return (
    <li className="sm:border bg-white border-zinc-200 sm:rounded-lg gap-2 grid">
      <div className="flex items-center gap-4 px-4 pt-2 sm:pt-4 sm:pb-2 pb-0">
        <div className="relative h-10 aspect-square rounded-full overflow-hidden">
          <ColorBlurImage src={profileImg} layout="fill" objectFit="cover" />
        </div>
        <dl className="grid flex-1 content-between">
          <dd className="text-sm font-semibold">{name}</dd>
          <dd className="text-xs text-zinc-400">{`${region}, ${country}`}</dd>
        </dl>
        <div className="text-zinc-400 flex text-xs gap-2">
          <div className="cursor-pointer">
            <FiMoreVertical size={20} />
          </div>
        </div>
      </div>

      <div className="relative h-96 md:mx-4 md:rounded-lg overflow-hidden">
        <ColorBlurImage src={image} layout="fill" objectFit="cover" />
      </div>

      <div className="flex gap-4 px-4">
        <div className="flex-1 flex gap-4 text-sm ">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="relative h-5 aspect-square">
              <BaseImage src={LikeImage} layout="fill" objectFit="cover" />
            </div>
            <span>{FEED_LIKE}</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <div className="relative h-5 aspect-square">
              <BaseImage src={CommentImage} layout="fill" objectFit="cover" />
            </div>
            <span>{FEED_REPLY}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="relative h-5 aspect-square">
            <BaseImage src={BookmarkImage} layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>

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

      <div className="text-sm grid gap-2 px-4">
        <p className="space-x-2 line-clamp-2">
          <strong className="cursor-pointer">{name}</strong>
          <span>{desc}</span>
        </p>

        {commentCount !== 0 && <FeedDetail commentCount={commentCount} />}

        <p className="text-2xs text-zinc-400 pb-2">
          {formatDistanceToNowStrictForKorea(Date.parse(createdAt))}
        </p>
      </div>

      <div className="md:border-t p-4 relative border-zinc-200 text-zinc-400 text-sm grid gap-2">
        <div className="flex gap-2">
          <div className="relative h-5 aspect-square cursor-pointer">
            <BaseImage src={EmojiImage} layout="fill" objectFit="cover" />
          </div>
          <input
            type="text"
            className="outline-none flex-1 w-full placeholder:text-zinc-400 text-zinc-900"
            placeholder={FEED_REPLY}
            maxLength={2200}
            value={yourComment}
            onChange={handleYourCommentChange}
          />

          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <button
              className="text-[#FE446C]"
              onClick={() =>
                handlePostComment({
                  comment: yourComment,
                  feedNumber,
                  pageForPage: page,
                })
              }
            >
              {FEED_ACTION_REPLY}
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default FeedItem;
