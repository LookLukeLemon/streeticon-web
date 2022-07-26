import React from "react";
import FeedList from "./FeedList";
import FeedItem from "./FeedItem";
import useInfiniteFeed from "hooks/useInfiniteFeed";
import LoadingSpinner from "components/common/LoadingSpinner";
import { PER_PAGE_FEED } from "common/Constants";

const Feeds = () => {
  const { data, isLoading, refetch } = useInfiniteFeed({
    perPage: PER_PAGE_FEED,
  });
  const items = data?.pages.flatMap((p) => p.items);

  if (isLoading) return <LoadingSpinner />;

  return (
    <FeedList>
      {items?.map((fi) => (
        <FeedItem key={fi.feedNumber} {...fi} refetch={refetch} />
      ))}
    </FeedList>
  );
};

export default Feeds;
