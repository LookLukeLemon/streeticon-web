import { FEED_VIEW_REPLY } from "common/Constants";
import FadePopup from "components/common/FadePopup";
import { useState } from "react";

const FeedDetail = ({ commentCount }: { commentCount: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <p
        className="cursor-pointer text-zinc-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        {`${commentCount}${FEED_VIEW_REPLY}`}
      </p>
      <FadePopup isOpen={isOpen} onIsOpen={setIsOpen}>
        <div className="p-10">상세 페이지</div>
      </FadePopup>
    </>
  );
};

export default FeedDetail;
