import { ReactNode } from "react";

const StoryList = ({ children }: { children: ReactNode }) => {
  return <ul className="flex gap-8 overflow-x-auto">{children}</ul>;
};

export default StoryList;
