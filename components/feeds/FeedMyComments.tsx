import useProfile from "hooks/useProfile";
import React from "react";

const FeedMyComments = ({ comments }: { comments: any[] }) => {
  const { data: profile } = useProfile();
  const username = profile?.name;

  if (!username) return null;

  return (
    <>
      {comments
        ?.filter((c) => c.user?.name === username)
        .map((c) => (
          <p key={c.feedCommentNumber} className="space-x-2 line-clamp-2">
            <strong className="cursor-pointer">{c.user?.nickname}</strong>
            <span>{c.desc}</span>
          </p>
        ))}
    </>
  );
};

export default FeedMyComments;
