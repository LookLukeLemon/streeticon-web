import React from "react";
import FeedLoader from "common/loader/FeedLoader";
import useInfiniteFeed from "hooks/useInfiniteFeed";
import { PER_PAGE_FEED } from "common/Constants";
import FeedItem from "./FeedItem";
import InfiniteFeedList from "./InfiniteFeedList";

const Feeds = () => {
  const { data, isLoading, refetch, hasNextPage, fetchNextPage } =
    useInfiniteFeed({
      perPage: PER_PAGE_FEED,
    });
  const items = data?.pages.flatMap((p) => p.items);
  const itemsLength = items?.length ?? 0;
  if (isLoading) return <FeedLoader />;

  return (
    <InfiniteFeedList
      itemsLength={itemsLength}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
    >
      {items?.map((fi) => (
        <FeedItem key={fi.feedNumber} {...fi} refetch={refetch} />
      ))}
    </InfiniteFeedList>
  );
};

export default Feeds;
