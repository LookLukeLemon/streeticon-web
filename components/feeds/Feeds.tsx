import React from "react";
import useInfiniteFeed from "hooks/useInfiniteFeed";
import { PER_PAGE_FEED } from "common/Constants";
import FeedItem from "./FeedItem";
import InfiniteFeedList from "./InfiniteFeedList";
import MultiFeedLoader from "components/common/loader/MultiFeedLoader";
import { Provider } from "jotai";

const Feeds = () => {
  const { data, isLoading, refetch, hasNextPage, fetchNextPage } =
    useInfiniteFeed({
      perPage: PER_PAGE_FEED,
    });
  const items = data?.pages.flatMap((p) => p.items);
  const itemsLength = items?.length ?? 0;
  if (isLoading && itemsLength === 0) {
    return <MultiFeedLoader count={PER_PAGE_FEED} />;
  }

  return (
    <InfiniteFeedList
      itemsLength={itemsLength}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
    >
      {items?.map((fi) => (
        <Provider key={fi.feedNumber}>
          <FeedItem {...fi} refetch={refetch} />
        </Provider>
      ))}
    </InfiniteFeedList>
  );
};

export default Feeds;
