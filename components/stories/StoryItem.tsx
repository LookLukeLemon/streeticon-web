import BaseImage from "components/common/BaseImage";
import { StaticImageData } from "next/image";

export type StoryItemProps = {
  img: StaticImageData;
  name: string;
};

const StoryItem = ({ img, name }: StoryItemProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-[68px] cursor-pointer aspect-square flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        <div className="bg-white rounded-full w-full relative aspect-square flex justify-center items-center overflow-hidden m-0.5 border-4 border-white">
          <BaseImage src={img} layout="fill" objectFit="cover" />
        </div>
      </div>
      <h3 className="text-xs text-zinc-400">{name}</h3>
    </div>
  );
};

export default StoryItem;
