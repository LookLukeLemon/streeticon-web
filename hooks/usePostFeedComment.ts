import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY_FEEDS } from "common/Constants";
import useAxiosPrivate from "./useAxiosPrivate";

export type PostFeedCommentProps = {
  comment: string;
  feedNumber: string;
  pageForPage: number;
};

const usePostFeedComment = (onSuccess?: any, onError?: any) => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();
  const postFeedComment = async (variables: PostFeedCommentProps) => {
    const postCommentResult = await axiosPrivate.post("/api/feed-comment", {
      comment: variables.comment,
      feedNumber: variables.feedNumber,
    });

    return postCommentResult.data;
  };

  return useMutation(postFeedComment, {
    onMutate: (variables) => {},
    onSuccess: async (data, variables, context) => {
      queryClient.invalidateQueries([QUERY_KEY_FEEDS]);
      onSuccess();
    },
    onError,
  });
};

export default usePostFeedComment;
