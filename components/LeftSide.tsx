import MyProfile from "./profile/MyProfile";
import SideMenu from "./side-menu/SideMenu";

const LeftSide = () => {
  return (
    <aside className="hidden h-screen sticky top-20 md:flex md:flex-col w-64">
      <MyProfile />
      <SideMenu />
    </aside>
  );
};

export default LeftSide;
