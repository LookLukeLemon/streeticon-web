import { memo } from "react";
import usePostFeedComment from "hooks/usePostFeedComment";
import FeedDetail from "./feed-detail/FeedDetail";
import { FeedItemProps } from "common/types";
import CreatorImage from "./CreatorImage";
import CreatorDesc from "./CreatorDesc";
import FeedImage from "./FeedImage";
import FeedFunction from "./FeedFunction";
import FeedLikeWithCount from "./FeedLikeWithCount";
import FeedContent from "./FeedContent";
import FeedUpdatedAt from "./FeedUpdatedAt";
import FeedCommentInput from "./FeedCommentInput";
import { useSetAtom } from "jotai";
import { setCommentAtom } from "common/store/feed/writable";
import FeedCommentAction from "./FeedCommentAction";
import { postCommentAtom } from "common/store/feed/api";
import FeedMyComments from "./FeedMyComments";

const FeedItem = (props: FeedItemProps) => {
  const {
    feedNumber,
    writer,
    likeCount,
    desc,
    likePeople,
    comments,
    image,
    updatedAt,
    page,
  } = props;
  const { nickname, country, region, image: profileImg } = writer;
  const commentCount = comments?.length ?? 0;
  const setComment = useSetAtom(setCommentAtom);
  const postComment = useSetAtom(postCommentAtom);
  const { mutate, isLoading } = usePostFeedComment(() => setComment(""));
  const handlePostComment = () => {
    postComment({
      action: mutate,
      params: { feedNumber, pageForPage: page },
      onSuccess: handleSuccess,
      onFail: handleFail,
    });
  };

  const handleSuccess = () => {};
  const handleFail = () => {
    //FIXME: Show toast when failed
  };

  return (
    <li className="sm:border bg-white border-zinc-200 sm:rounded-lg gap-2 grid">
      <div className="flex items-center gap-4 px-4 pt-2 sm:pt-4 sm:pb-2 pb-0">
        <CreatorImage profileImg={profileImg} />
        <CreatorDesc name={nickname} region={region} country={country} />
      </div>

      <FeedImage image={image} />
      <FeedFunction />
      <FeedLikeWithCount likePeople={likePeople} likeCount={likeCount} />

      <div className="text-sm grid gap-2 px-4">
        <FeedContent name={nickname} desc={desc} />
        {commentCount !== 0 && (
          <>
            <FeedDetail props={props} />
            <FeedMyComments comments={comments} />
          </>
        )}
        <FeedUpdatedAt updatedAt={updatedAt} />
      </div>

      <div className="md:border-t p-4 relative border-zinc-200 text-zinc-400 text-sm grid gap-2">
        <div className="flex gap-2">
          <FeedCommentInput onChange={setComment} />
          <FeedCommentAction
            isLoading={isLoading}
            onPostComment={handlePostComment}
          />
        </div>
      </div>
    </li>
  );
};

export default memo(
  FeedItem,
  (prev, next) =>
    prev.feedNumber === next.feedNumber &&
    prev.likeCount === next.likeCount &&
    prev.comments?.length === next.comments?.length
);
