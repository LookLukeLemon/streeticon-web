import BaseImage from "components/common/BaseImage";
import React from "react";
import useProfile from "hooks/useProfile";

const MyProfile = () => {
  const { data: profile } = useProfile();

  return (
    <div className="flex flex-col border-b border-zinc-200">
      <div className="flex flex-col justify-center items-center py-8 ">
        <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full ">
          <div className="bg-white flex items-center justify-center aspect-square rounded-full m-0.5">
            <div className="rounded-full aspect-square m-0.5">
              <div className="relative aspect-square h-20 overflow-hidden rounded-full">
                {profile?.image && (
                  <BaseImage
                    src={profile?.image}
                    layout="fill"
                    objectFit="cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <h3 className="font-semibold pt-4 text-center truncate px-8 w-full">
          {profile?.name}
        </h3>
        <p className="text-xs w-full text-center truncate px-8 text-zinc-400">
          {`${profile?.region}, ${profile?.country}`}
        </p>
      </div>
      <dl className="grid grid-cols-3 pb-4 px-8 ">
        <dd className="grid grid-rows-2">
          <span className="justify-self-center">{profile?.postCount}</span>
          <h4 className=" text-2xs justify-self-center text-zinc-400">
            포스트
          </h4>
        </dd>
        <dd className="grid grid-rows-2">
          <span className="justify-self-center">{profile?.followerCount}</span>
          <h4 className=" text-2xs justify-self-center text-zinc-400">
            팔로워
          </h4>
        </dd>
        <dd className="grid grid-rows-2">
          <span className="justify-self-center">{profile?.followingCount}</span>
          <h4 className=" text-2xs justify-self-center text-zinc-400">
            팔로잉
          </h4>
        </dd>
      </dl>
    </div>
  );
};

export default MyProfile;
