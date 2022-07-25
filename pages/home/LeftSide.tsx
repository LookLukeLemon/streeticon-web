import MyProfile from "../../components/profile/MyProfile";
import SideMenu from "../../components/side-menu/SideMenu";

const LeftSide = () => {
  return (
    <aside className="hidden h-screen sticky top-20 lg:flex lg:flex-col w-64 bg-white">
      <MyProfile />
      <SideMenu />
    </aside>
  );
};

export default LeftSide;
