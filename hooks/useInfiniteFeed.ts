import { QUERY_KEY_FEEDS } from "common/Constants";
import useAxiosPrivate from "./useAxiosPrivate";
import { useInfiniteQuery } from "@tanstack/react-query";
import { sleep } from "utils";

export type InfiniteFeedProps = {
  perPage: number;
  onSuccess?: () => void;
  onError?: () => void;
};

const useInfiniteFeed = ({
  perPage,
  onSuccess,
  onError,
}: InfiniteFeedProps) => {
  const axiosPrivate = useAxiosPrivate();
  const fetchItems = async ({ pageParam = 1, signal }: any) => {
    const result = await axiosPrivate.get(`/api/feed`, {
      params: { page: pageParam, perPage },
      signal,
    });
    const { items, total } = result.data;
    await sleep(5000);
    return {
      items,
      total,
      nextPage: pageParam + 1,
      isLast: !(pageParam * perPage < total),
    };
  };

  return useInfiniteQuery([QUERY_KEY_FEEDS], fetchItems, {
    onSuccess,
    onError,
    getNextPageParam: (lastPage) => {
      return lastPage.isLast ? undefined : lastPage.nextPage;
    },
  });
};

export default useInfiniteFeed;
