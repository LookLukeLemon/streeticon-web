import Suggestions from "components/suggestions/Suggestions";
import TrendingFeed from "components/trending-feed/TrendingFeed";

const RightSide = () => {
  return (
    <aside className="hidden h-screen sticky top-20 xl:flex flex-col w-64 p-8">
      <h2 className="font-semibold pb-8">Trending Feed</h2>
      <TrendingFeed />
      <h2 className="font-semibold py-8">Suggestions for you</h2>
      <Suggestions />
    </aside>
  );
};

export default RightSide;
