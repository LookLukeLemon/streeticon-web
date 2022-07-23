import { ReactNode } from "react";

const FeedList = ({ children }: { children: ReactNode }) => {
  return <ul className="grid md:gap-8">{children}</ul>;
};

export default FeedList;
