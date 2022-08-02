import { FeedItemProps } from "common/types";
import ColorBlurImage from "components/common/ColorBlurImage";
import FeedDetailFunction from "./FeedDetailFunction";
import FeedComment from "./FeedComment";
import FeedCommentList from "./FeedCommentList";
import FeedDetailCreator from "./FeedDetailCreator";
import { useSetAtom } from "jotai";
import { setCommentAtom } from "common/store/feed/writable";
import { postCommentAtom } from "common/store/feed/api";
import usePostFeedComment from "hooks/usePostFeedComment";
import FeedCommentInput from "../FeedCommentInput";
import FeedCommentAction from "../FeedCommentAction";

const FeedDetailContainer = ({ props }: { props: FeedItemProps }) => {
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
  const setComment = useSetAtom(setCommentAtom);
  const postComment = useSetAtom(postCommentAtom);
  const { mutate, isLoading } = usePostFeedComment(() => setComment(""));
  const handlePostComment = () => {
    postComment({
      action: mutate,
      params: { feedNumber, pageForPage: page },
      onSuccess: () => {},
      onFail: () => {},
    });
  };

  return (
    <div className="feed-detail-container">
      <div className="relative sm:flex-1 h-full">
        <ColorBlurImage src={image} layout="fill" objectFit="cover" />
      </div>

      <div className="w-full h-full sm:w-96 flex flex-col divide-y divide-zinc-200">
        <FeedDetailCreator
          image={profileImg}
          nickname={nickname}
          region={region}
          country={country}
        />
        <div className="overflow-y-scroll flex-1">
          <FeedComment
            image={profileImg}
            nickname={nickname}
            desc={desc}
            updatedAt={updatedAt}
          />
          <FeedCommentList>
            {comments.map((c) => {
              const {
                user: {
                  nickname: commentUserNickname,
                  image: commentUserImage,
                },
                desc: commentDesc,
                updatedAt: commentUpdatedAt,
              } = c;
              return (
                <FeedComment
                  key={c.feedCommentNumber}
                  image={commentUserImage}
                  nickname={commentUserNickname}
                  desc={commentDesc}
                  updatedAt={commentUpdatedAt}
                />
              );
            })}
          </FeedCommentList>
        </div>

        <FeedDetailFunction
          likePeople={likePeople}
          likeCount={likeCount}
          updatedAt={updatedAt}
        />
        <div className="md:border-t p-4 relative border-zinc-200 text-zinc-400 text-sm">
          <div className="flex gap-2">
            <FeedCommentInput onChange={setComment} />
            <FeedCommentAction
              isLoading={isLoading}
              onPostComment={handlePostComment}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedDetailContainer;
