import { ReactNode } from "react";

const StoryList = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="flex pl-4 md:pl-0 gap-4 sm:gap-8 overflow-x-auto">
      {children}
    </ul>
  );
};

export default StoryList;
