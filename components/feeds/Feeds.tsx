import React from "react";
import FeedList from "./FeedList";
import FeedItem from "./FeedItem";
import useInfiniteFeed from "hooks/useInfiniteFeed";
import LoadingSpinner from "components/common/LoadingSpinner";

const Feeds = () => {
  const { data, isLoading } = useInfiniteFeed({ perPage: 20 });
  const items = data?.pages.flatMap((p) => p.items);

  if (isLoading) return <LoadingSpinner />;
  return (
    <FeedList>
      {items?.map((fi) => (
        <FeedItem key={fi.id} {...fi} />
      ))}
    </FeedList>
  );
};

export default Feeds;
