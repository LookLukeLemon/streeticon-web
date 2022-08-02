import React from "react";
import FeedLoader from "./FeedLoader";

const MultiFeedLoader = ({ count }: { count: number }) => {
  return (
    <ul className="grid gap-8">
      {Array(count)
        .fill(null)
        .map((c, idx) => (
          <FeedLoader key={idx} />
        ))}
    </ul>
  );
};

export default MultiFeedLoader;
