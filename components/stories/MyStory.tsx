import { MY_STORY } from "common/Constants";
import BaseImage from "components/common/BaseImage";
import PlusImage from "public/images/plus.svg";
import React from "react";

const MyStory = () => {
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-4">
      <div className="h-14 sm:h-[68px] cursor-pointer aspect-square flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        <div className="bg-white rounded-full w-full aspect-square flex justify-center items-center overflow-hidden m-1">
          <div className="w-8 lg:w-10 aspect-square relative">
            <BaseImage src={PlusImage} layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
      <h3 className="text-xs text-zinc-400">{MY_STORY}</h3>
    </div>
  );
};

export default MyStory;
