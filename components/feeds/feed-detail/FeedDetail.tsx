import { FeedItemProps } from "common/types";
import FadePopup from "components/common/FadePopup";
import { ReactNode, useState } from "react";
import FeedDetailContainer from "./FeedDetailContainer";

const FeedDetail = ({
  props,
  children,
}: {
  props: FeedItemProps;
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>{children}</div>
      <FadePopup isOpen={isOpen} onIsOpen={setIsOpen}>
        <FeedDetailContainer props={props} />
      </FadePopup>
    </>
  );
};

export default FeedDetail;
