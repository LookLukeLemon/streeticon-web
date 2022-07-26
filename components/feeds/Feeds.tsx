import React from "react";
import FeedLoader from "common/loader/FeedLoader";
import useInfiniteFeed from "hooks/useInfiniteFeed";
import { PER_PAGE_FEED } from "common/Constants";
import FeedList from "./FeedList";
import FeedItem from "./FeedItem";

const Feeds = () => {
  const { data, isLoading, refetch } = useInfiniteFeed({
    perPage: PER_PAGE_FEED,
  });
  const items = data?.pages.flatMap((p) => p.items);

  if (isLoading) return <FeedLoader />;

  return (
    <FeedList>
      {items?.map((fi) => (
        <FeedItem key={fi.feedNumber} {...fi} refetch={refetch} />
      ))}
    </FeedList>
  );
};

export default Feeds;
