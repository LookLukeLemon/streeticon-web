import { PROFILE_EDIT } from "common/Constants";
import BaseImage from "components/common/BaseImage";
import SettingImage from "public/images/setting.svg";
import { memo } from "react";

const ProfileBasicInfo = ({ name }: { name: string }) => {
  return (
    <h3 className="font-semibold text-xl truncate w-full flex items-center gap-4">
      {name}
      <button className="border text-xs px-3 py-1 border-zinc-200 rounded-lg">
        {PROFILE_EDIT}
      </button>
      <div className="relative h-6 aspect-square cursor-pointer">
        <BaseImage src={SettingImage} layout="fill" objectFit="cover" />
      </div>
    </h3>
  );
};

export default memo(ProfileBasicInfo);
