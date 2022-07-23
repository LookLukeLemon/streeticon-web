import { ReactNode } from "react";

const StoryList = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="flex pl-4 md:pl-0 gap-4 sm:gap-8 overflow-x-auto border-b border-zinc-200 sm:border-b-0 pb-2">
      {children}
    </ul>
  );
};

export default StoryList;
