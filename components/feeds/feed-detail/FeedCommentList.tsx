import { ReactNode } from "react";

const FeedCommentList = ({ children }: { children: ReactNode }) => {
  return <ul>{children}</ul>;
};

export default FeedCommentList;
