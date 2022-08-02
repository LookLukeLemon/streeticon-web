import React, { useRef } from "react";
import useMyProfile from "./useMyProfile";
import ProfileImage from "./ProfileImage";
import ProfileStats from "./ProfileStats";
import ProfileOrigin from "./ProfileOrigin";
import ProfileBasicInfo from "./ProfileBasicInfo";

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
        <ProfileImage image={image} onClick={onImageChange} />

        <div className="px-8 flex flex-col gap-4">
          <ProfileBasicInfo name={name} />
          <ProfileOrigin region={region} country={country} />
          <div className="gap-4 hidden sm:grid">
            <ProfileStats
              postCount={postCount}
              followerCount={followerCount}
              followingCount={followingCount}
            />
            <span className="text-sm font-semibold">{nickname}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
