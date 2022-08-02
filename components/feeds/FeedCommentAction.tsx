import { FEED_ACTION_REPLY } from "common/Constants";
import LoadingSpinner from "components/common/LoadingSpinner";
import React from "react";

const FeedCommentAction = ({
  isLoading,
  onPostComment,
}: {
  isLoading: boolean;
  onPostComment: () => void;
}) => {
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <button className="text-[#FE446C]" onClick={() => onPostComment()}>
          {FEED_ACTION_REPLY}
        </button>
      )}
    </>
  );
};

export default FeedCommentAction;
