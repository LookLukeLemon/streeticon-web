import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY_FEEDS } from "common/Constants";
import useAxiosPrivate from "./useAxiosPrivate";

export type PostFeedProps = {
  desc: string;
  image: string;
};

const usePostFeed = (onSuccess?: any, onError?: any) => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();
  const postFeed = async (variables: PostFeedProps) => {
    const postCommentResult = await axiosPrivate.post("/api/feed", variables);

    return postCommentResult.data;
  };

  return useMutation(postFeed, {
    onMutate: (variables) => {},
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries([QUERY_KEY_FEEDS]);
      onSuccess();
    },
    onError,
  });
};

export default usePostFeed;
