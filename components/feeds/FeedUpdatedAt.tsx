import React from "react";
import { formatDistanceToNowStrictForKorea } from "utils";

const FeedUpdatedAt = ({ updatedAt }: { updatedAt: string }) => {
  return (
    <p className="text-2xs text-zinc-400 pb-2">
      {formatDistanceToNowStrictForKorea(Date.parse(updatedAt))}
    </p>
  );
};

export default FeedUpdatedAt;
