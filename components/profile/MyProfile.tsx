import BaseImage from "components/common/BaseImage";
import React, { useRef } from "react";
import SettingImage from "public/images/setting.svg";
import UserAnonymousImage from "public/images/user-anonymous.jpeg";
import useMyProfile from "./useMyProfile";
import {
  PROFILE_EDIT,
  PROFILE_FOLLOWER,
  PROFILE_FOLLOWING,
  PROFILE_POST,
} from "common/Constants";

const MyProfile = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    image,
    name,
    nickname,
    country,
    region,
    postCount,
    followerCount,
    followingCount,
    onFileChange,
    onImageChange,
  } = useMyProfile(inputRef);

  return (
    <div className="max-w-2xl flex flex-col items-center mx-auto border-b border-zinc-200">
      <div className="flex py-8 w-full">
        <input
          style={{ display: "none" }}
          ref={inputRef}
          type="file"
          onChange={onFileChange}
        />
        {image ? (
          <div
            className="cursor-pointer bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full mx-4 sm:mx-8 md:mx-16"
            onClick={onImageChange}
          >
            <div className="bg-white  flex items-center justify-center aspect-square rounded-full m-0.5">
              <div className="rounded-full aspect-square m-0.5">
                <div className="relative aspect-square h-40 overflow-hidden rounded-full">
                  <BaseImage src={image} layout="fill" objectFit="cover" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="cursor-pointer rounded-full mx-4 sm:mx-8 md:mx-16"
            onClick={onImageChange}
          >
            <div className="relative aspect-square h-16 sm:h-40 overflow-hidden rounded-full">
              <BaseImage
                src={UserAnonymousImage}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        )}

        <div className="px-8 flex flex-col gap-4">
          <h3 className="font-semibold text-xl truncate w-full flex items-center gap-4">
            {name}
            <button className="border text-xs px-3 py-1 border-zinc-200 rounded-lg">
              {PROFILE_EDIT}
            </button>
            <div className="relative h-6 aspect-square cursor-pointer">
              <BaseImage src={SettingImage} layout="fill" objectFit="cover" />
            </div>
          </h3>
          <p className="text-xs w-full truncate text-zinc-400">
            {`${region}, ${country}`}
          </p>

          <div className="gap-4 hidden sm:grid">
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
            <span className="text-sm font-semibold">{nickname}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
