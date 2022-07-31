import { InfiniteGifticonListProps } from "common/types";
import LoadingSpinner from "components/common/LoadingSpinner";
import InfiniteScroll from "react-infinite-scroll-component";
import FeedList from "./FeedList";

const InfiniteFeedList = ({
  children,
  itemsLength,
  fetchNextPage,
  hasNextPage,
}: InfiniteGifticonListProps) => {
  return (
    <InfiniteScroll
      scrollThreshold={0.7}
      dataLength={itemsLength}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={
        <div className="py-8">
          <LoadingSpinner />
        </div>
      }
    >
      <FeedList>{children}</FeedList>
    </InfiniteScroll>
  );
};

export default InfiniteFeedList;
