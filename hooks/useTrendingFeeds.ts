import { QUERY_KEY_TRENDING_FEEDS } from "common/Constants";
import { useQuery } from "@tanstack/react-query";
import TrendingFeed1 from "public/images/trending-feed-1.jpg";
import TrendingFeed2 from "public/images/trending-feed-2.jpg";
import TrendingFeed3 from "public/images/trending-feed-3.jpg";
import TrendingFeed4 from "public/images/trending-feed-4.jpg";
import useAxiosPrivate from "./useAxiosPrivate";
import { TrendingFeedSummary } from "common/types";

const mockTrendingFeeds: TrendingFeedSummary[] = [
  {
    image: TrendingFeed1,
  },
  {
    image: TrendingFeed2,
  },
  {
    image: TrendingFeed3,
  },
  {
    image: TrendingFeed4,
  },
];

const useTrendingFeeds = (onSuccess?: any, onError?: any) => {
  const axiosPrivate = useAxiosPrivate();
  const fetchTrendingFeeds = async ({
    signal,
  }: any): Promise<TrendingFeedSummary[]> => {
    return mockTrendingFeeds;
    // const storiesResult = await axiosPrivate.get("/api/stories", {
    //   signal,
    // });

    // return storiesResult.data;
  };

  return useQuery([QUERY_KEY_TRENDING_FEEDS], fetchTrendingFeeds, {
    onSuccess,
    onError,
  });
};

export default useTrendingFeeds;
