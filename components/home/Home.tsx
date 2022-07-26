import Feeds from "components/feeds/Feeds";
import Stories from "components/stories/Stories";
import { BsFillPlayFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="flex-1 pb-4 sm:py-4 lg:py-8 w-full">
      <div className="max-w-2xl w-full grid md:gap-8 mx-auto">
        <div className="hidden md:flex items-center px-4 md:px-0">
          <h2 className="flex-1 font-semibold text-xl">스토리</h2>
          <button className="font-semibold flex text-sm items-center">
            더보기 <BsFillPlayFill size={16} />
          </button>
        </div>

        <Stories />

        <div className="hidden md:flex items-center px-4 md:px-0">
          <h2 className="flex-1 font-semibold text-xl">피드</h2>
          <dl className="flex gap-4">
            <dd className="cursor-pointer font-semibold border rounded-full flex items-center text-xs px-3 text-zinc-400 py-1">
              최신순
            </dd>
            <dd className="font-semibold cursor-pointer bg-white border rounded-full flex items-center text-xs px-3 py-1">
              인기순
            </dd>
          </dl>
        </div>

        <Feeds />
      </div>
    </div>
  );
};

export default Home;
