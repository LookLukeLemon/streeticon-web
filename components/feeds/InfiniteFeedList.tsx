import LoadingSpinner from "components/common/LoadingSpinner";
import { ReactNode } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import FeedList from "./FeedList";

export type InfiniteGifticonListProps = {
  children: ReactNode;
  itemsLength: number;
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
};

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
