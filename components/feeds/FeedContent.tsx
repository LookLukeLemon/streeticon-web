import React from "react";

const FeedContent = ({ name, desc }: { name: string; desc: string }) => {
  return (
    <p className="space-x-2 line-clamp-2">
      <strong className="cursor-pointer">{name}</strong>
      <span>{desc}</span>
    </p>
  );
};

export default FeedContent;
