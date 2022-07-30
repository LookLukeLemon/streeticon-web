import { TrendingFeedSummary } from "common/types";
import BaseImage from "components/common/BaseImage";

const TrendingFeedItem = ({ image }: TrendingFeedSummary) => {
  return (
    <div className="relative h-20 rounded-lg overflow-hidden">
      <BaseImage src={image} layout="fill" objectFit="cover" />
    </div>
  );
};

export default TrendingFeedItem;
