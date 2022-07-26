import { ReactNode } from "react";

const FeedList = ({ children }: { children: ReactNode }) => {
  return <ul className="grid gap-8">{children}</ul>;
};

export default FeedList;
