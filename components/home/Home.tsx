import Feeds from "components/feeds/Feeds";
import Stories from "components/stories/Stories";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="sm:px-4 md:px-8 lg:px-16 py-8 w-full flex justify-center">
      <div className="max-w-xl w-full grid gap-8">
        <div className="flex items-center">
          <h2 className="flex-1 font-semibold text-xl">스토리</h2>
          <button className="font-semibold flex text-sm items-center">
            더보기 <BsFillPlayFill size={16} />
          </button>
        </div>
        <Stories />
        <div className="flex items-center">
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
