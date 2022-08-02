import { FEED_VIEW_REPLY } from "common/Constants";
import { FeedItemProps } from "common/types";
import FadePopup from "components/common/FadePopup";
import { useState } from "react";
import FeedDetailContainer from "./FeedDetailContainer";

const FeedDetail = ({ props }: { props: FeedItemProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  const commentCount = props?.comments?.length ?? 0;

  return (
    <>
      <p
        className="cursor-pointer text-zinc-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        {`${commentCount}${FEED_VIEW_REPLY}`}
      </p>
      <FadePopup isOpen={isOpen} onIsOpen={setIsOpen}>
        <FeedDetailContainer props={props} />
      </FadePopup>
    </>
  );
};

export default FeedDetail;
