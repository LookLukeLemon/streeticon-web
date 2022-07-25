import LogoRegion from "./logo/LogoRegion";
import TailRegion from "./tail/TailRegion";
import SearchRegion from "./search/SearchRegion";
import PersistLogin from "components/PersistLogin";

const Header = () => {
  return (
    <header className="flex sticky top-0 h-20 bg-white z-10 sm:border-b border-zinc-200">
      <LogoRegion />
      <SearchRegion />

      <PersistLogin>
        <TailRegion />
      </PersistLogin>
    </header>
  );
};

export default Header;
