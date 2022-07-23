import React from "react";
import TrendingFeedList from "./TrendingFeedList";
import TrendingFeedItem from "./TrendingFeedItem";
import useTrendingFeeds from "hooks/useTrendingFeeds";

const TrendingFeed = () => {
  const { data: trendingFeeds } = useTrendingFeeds();
  return (
    <TrendingFeedList>
      {trendingFeeds?.map((tf, idx) => (
        <TrendingFeedItem key={idx} {...tf} />
      ))}
    </TrendingFeedList>
  );
};

export default TrendingFeed;
