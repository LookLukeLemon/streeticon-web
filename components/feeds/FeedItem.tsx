import BaseImage from "components/common/BaseImage";
import { FiMoreVertical } from "react-icons/fi";
import { formatDistance, subDays } from "date-fns";
import CommentImage from "public/images/comment.svg";
import LikeImage from "public/images/like.svg";
import BookmarkImage from "public/images/bookmark.svg";
import EmojiImage from "public/images/emoji.svg";
import { StaticImageData } from "next/image";
import { classNames } from "utils";

export type FeedItemWriterProps = {
  img: StaticImageData;
  name: string;
  country: string;
  region: string;
  desc: string;
};
export type FeedItemProps = {
  id: string;
  writer: FeedItemWriterProps;
  createdAt: string;
  likeCount: number;
  likePeople: FeedItemWriterProps[];
  commentCount: number;
  comments: [];
  images: StaticImageData[];
};

const FeedItem = (props: FeedItemProps) => {
  const { writer, likeCount, likePeople, commentCount, comments, images } =
    props;
  const { name, desc, country, region, img } = writer;

  return (
    <div className="sm:border border-t bg-white border-zinc-200 sm:rounded-lg gap-4 grid">
      <div className="flex items-center gap-4 p-4 pb-0">
        <div className="relative h-10 aspect-square rounded-full overflow-hidden">
          <BaseImage src={img} layout="fill" objectFit="cover" />
        </div>
        <dl className="grid flex-1 content-between">
          <dd className="text-sm font-semibold">{name}</dd>
          <dd className="text-xs text-zinc-400">{`${region}, ${country}`}</dd>
        </dl>
        <div className="text-zinc-400 flex text-xs gap-2">
          <p>
            {formatDistance(subDays(new Date(), 3), new Date(), {
              addSuffix: true,
            })}
          </p>
          <div className="cursor-pointer">
            <FiMoreVertical size={20} />
          </div>
        </div>
      </div>

      <div className="relative h-72 md:mx-4 md:rounded-lg overflow-hidden">
        <BaseImage src={images[0]} layout="fill" objectFit="cover" />
      </div>

      <div className="flex gap-4 px-4">
        <div className="flex-1 flex gap-4 text-sm ">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="relative h-5 aspect-square">
              <BaseImage src={LikeImage} layout="fill" objectFit="cover" />
            </div>
            <span>좋아요</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <div className="relative h-5 aspect-square">
              <BaseImage src={CommentImage} layout="fill" objectFit="cover" />
            </div>
            <span>댓글달기</span>
          </div>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="relative h-5 aspect-square">
            <BaseImage src={BookmarkImage} layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>

      <div className="px-4 flex items-center relative">
        {likePeople.map((p, idx) => {
          const leftOffset = idx * 4;
          return (
            <div
              key={idx}
              style={{ transform: `translate(-${leftOffset}px, 0)` }}
              className={classNames(
                "relative h-6 aspect-square rounded-full overflow-hidden ring-2 border-2 border-black ring-white"
              )}
            >
              <BaseImage src={p.img} layout="fill" objectFit="cover" />
            </div>
          );
        })}

        <span className="text-sm font-semibold">{likeCount} 좋아요</span>
      </div>

      <div className="text-sm grid gap-2 px-4">
        <p className="space-x-2 line-clamp-2">
          <strong className="cursor-pointer">{name}</strong>
          <span>{desc}</span>
        </p>
        <p className="text-zinc-400 cursor-pointer">{`${commentCount}개의 댓글 보기`}</p>
      </div>

      <div className="border-t p-4 relative border-zinc-200 text-zinc-400 text-sm flex gap-2">
        <div className="relative h-5 aspect-square cursor-pointer">
          <BaseImage src={EmojiImage} layout="fill" objectFit="cover" />
        </div>
        <input
          className="outline-none flex-1 w-full placeholder:text-zinc-400 text-zinc-900"
          placeholder="댓글 달기"
        />
        <button className="text-[#FE446C]">올리기</button>
      </div>
    </div>
  );
};

export default FeedItem;
