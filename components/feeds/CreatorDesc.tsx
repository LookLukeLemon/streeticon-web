import React from "react";
import { FiMoreVertical } from "react-icons/fi";

const CreatorDesc = ({
  name,
  region,
  country,
}: {
  name: string;
  region: string;
  country: string;
}) => {
  return (
    <>
      <dl className="grid flex-1 content-between">
        <dd className="text-sm font-semibold">{name}</dd>
        <dd className="text-xs text-zinc-400">{`${region}, ${country}`}</dd>
      </dl>
      <div className="text-zinc-400 flex text-xs gap-2">
        <div className="cursor-pointer">
          <FiMoreVertical size={20} />
        </div>
      </div>
    </>
  );
};

export default CreatorDesc;
