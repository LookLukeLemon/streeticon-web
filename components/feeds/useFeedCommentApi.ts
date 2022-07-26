import useAxiosPrivate from "hooks/useAxiosPrivate";

export type PostFeedCommentProps = {
  comment: string;
  feedNumber: string;
  onSuccess: () => void;
};

const useFeedCommentApi = () => {
  const axiosPrivate = useAxiosPrivate();
  const handlePostComment = async ({
    comment,
    feedNumber,
    onSuccess,
  }: PostFeedCommentProps) => {
    if (!comment || !feedNumber) return;

    try {
      const jsonBody = {
        comment,
        feedNumber,
      };

      const result = await axiosPrivate.post("/api/feed-comment", jsonBody);

      if (result.status === 201) {
        onSuccess();
      }
    } catch (err) {
      // FIXME:alert
    }
  };

  return { onPostComment: handlePostComment };
};

export default useFeedCommentApi;
