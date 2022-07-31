import React from "react";

const ProfileOrigin = ({
  region,
  country,
}: {
  region: string;
  country: string;
}) => {
  return (
    <p className="text-xs w-full truncate text-zinc-400">
      {`${region}, ${country}`}
    </p>
  );
};

export default ProfileOrigin;
