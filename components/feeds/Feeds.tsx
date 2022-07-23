import React from "react";
import FeedList from "./FeedList";
import FeedItem from "./FeedItem";
import useInfiniteFeed from "hooks/useInfiniteFeed";

const Feeds = () => {
  const { data } = useInfiniteFeed({ perPage: 20 });
  const items = data?.pages.flatMap((p) => p.items);

  return (
    <FeedList>
      {items?.map((fi) => (
        <FeedItem key={fi.id} {...fi} />
      ))}
    </FeedList>
  );
};

export default Feeds;
