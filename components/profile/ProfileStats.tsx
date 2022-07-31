import {
  PROFILE_FOLLOWER,
  PROFILE_FOLLOWING,
  PROFILE_POST,
} from "common/Constants";
import React from "react";

const ProfileStats = ({
  postCount,
  followerCount,
  followingCount,
}: {
  postCount: number;
  followerCount: number;
  followingCount: number;
}) => {
  return (
    <dl className="grid grid-cols-3 gap-4">
      <dd className="grid grid-cols-2 items-center">
        <span>{postCount}</span>
        <h4 className=" text-2xs text-zinc-400">{PROFILE_POST}</h4>
      </dd>
      <dd className="grid grid-cols-2 items-center">
        <span>{followerCount}</span>
        <h4 className=" text-2xs text-zinc-400">{PROFILE_FOLLOWER}</h4>
      </dd>
      <dd className="grid grid-cols-2 items-center">
        <span>{followingCount}</span>
        <h4 className=" text-2xs text-zinc-400">{PROFILE_FOLLOWING}</h4>
      </dd>
    </dl>
  );
};

export default ProfileStats;
