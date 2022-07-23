import BaseImage from "components/common/BaseImage";
import React from "react";
import PlusImage from "public/images/plus.svg";
import WomenImage1 from "public/images/women-1.jpg";
import WomenImage2 from "public/images/women-2.jpg";
import WomenImage3 from "public/images/women-3.jpg";
import WomenImage4 from "public/images/women-4.jpg";
import MenImage1 from "public/images/men-1.jpg";
import MenImage2 from "public/images/men-2.jpg";
import StoryList from "./StoryList";
import StoryItem from "./StoryItem";

const stories = [
  {
    img: WomenImage1,
    name: "퍼데나",
  },
  {
    img: WomenImage2,
    name: "벤 샤르",
  },
  {
    img: WomenImage3,
    name: "스튜카",
  },
  {
    img: WomenImage4,
    name: "제니",
  },
  {
    img: MenImage2,
    name: "루이스",
  },
  {
    img: MenImage1,
    name: "피를로",
  },
];

const Stories = () => {
  return (
    <StoryList>
      <div className="flex flex-col items-center gap-2 sm:gap-4">
        <div className="h-14 sm:h-[68px] cursor-pointer aspect-square flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          <div className="bg-white rounded-full w-full aspect-square flex justify-center items-center overflow-hidden m-1">
            <div className="w-8 lg:w-10 aspect-square relative">
              <BaseImage src={PlusImage} layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
        <h3 className="text-xs text-zinc-400">스토리 쓰기</h3>
      </div>
      {stories.map((st) => (
        <StoryItem key={st.name} {...st} />
      ))}
    </StoryList>
  );
};

export default Stories;
