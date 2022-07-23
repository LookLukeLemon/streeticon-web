import { SuggestionSummary } from "common/store";
import BaseImage from "components/common/BaseImage";

const SuggestionItem = ({ image, title, desc }: SuggestionSummary) => {
  return (
    <div className="flex gap-2">
      <div className="relative h-10 aspect-square rounded-full overflow-hidden ring-1 ring-zinc-100">
        <BaseImage src={image} layout="fill" objectFit="cover" />
      </div>
      <div className="flex-1 grid grid-rows-2 text-xs">
        <h2 className="font-semibold">{title}</h2>
        <p className="truncate text-zinc-400">{desc}</p>
      </div>
    </div>
  );
};

export default SuggestionItem;
