import { FEED_REPLY } from "common/Constants";
import { commentAtom } from "common/store/feed";
import BaseImage from "components/common/BaseImage";
import { useAtomValue } from "jotai";
import EmojiImage from "public/images/emoji.svg";

const FeedCommentInput = ({ onChange }: { onChange: (by: string) => void }) => {
  const comment = useAtomValue(commentAtom);
  return (
    <>
      <div className="relative h-5 aspect-square cursor-pointer">
        <BaseImage src={EmojiImage} layout="fill" objectFit="cover" />
      </div>
      <input
        type="text"
        className="outline-none flex-1 w-full placeholder:text-zinc-400 text-zinc-900"
        placeholder={FEED_REPLY}
        maxLength={2200}
        value={comment}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default FeedCommentInput;
