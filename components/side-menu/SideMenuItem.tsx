import { ReactNode } from "react";

export type SideMenuItemProps = {
  imgNode: ReactNode;
  name: string;
};

const SideMenuItem = ({ imgNode, name }: SideMenuItemProps) => {
  return (
    <div className="flex cursor-pointer hover:bg-zinc-50 text-sm items-center gap-4 text-zinc-400 px-8 py-4">
      {imgNode}
      {name}
    </div>
  );
};

export default SideMenuItem;
