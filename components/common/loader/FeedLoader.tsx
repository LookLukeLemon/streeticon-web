const FeedLoader = () => {
  return (
    <div className="sm:border bg-white border-zinc-200 sm:rounded-lg gap-2 grid animate-pulse">
      <div className="flex items-center gap-4 px-4 pt-2 sm:pt-4 sm:pb-2 pb-0">
        <div className="relative h-10 aspect-square rounded-full bg-zinc-200" />
        <dl className="grid flex-1 gap-2">
          <div className="bg-zinc-200 h-4 rounded-lg w-20" />
          <dd className="h-3 w-48 rounded-lg bg-zinc-200" />
        </dl>
        <div className="text-zinc-400 flex text-xs gap-2">
          <div className="cursor-pointer h-5 bg-zinc-200"></div>
        </div>
      </div>

      <div className="relative h-96 md:mx-4 md:rounded-lg bg-zinc-200 mb-4" />
    </div>
  );
};

export default FeedLoader;
